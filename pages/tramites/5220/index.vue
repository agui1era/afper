<template>
  <section>
    <div class="container form-cha">
        <header>
          <h4>
            {{iConfig.proveedor_servicio}}
            <a 
              href="https://www.chileatiende.gob.cl/instituciones/AL005" 
              class="link"
              title="Institución asociada"
              >{{iConfig.nombre_proveedor_servicio}}</a>
          </h4>
          <h1>{{iConfig.titulo}}</h1>
        </header> 
        <b-loading :is-full-page="true" :active.sync="loading" :can-cancel="false"></b-loading>
        <section>
          <div class="form-sector">
            <b-field :label="iConfig.lbl_txt_rut"
              :type="{ 'is-danger': errors.has('rut') }"
              :message="{ 'Ingrese un RUT válido': errors.has('rut') }">
              <b-input placeholder="Ingrese RUT , Ejemplo: 11.111.111-1" 
                      v-model="rut"
                      type="text"
                      maxlength="12"
                      id="rut"
                      name="rut" 
                      v-validate="'rut'"
                      :keyup="formatRut()"
              ></b-input>
            </b-field>
          </div>
          <div class="cont-req">
            <span>{{iConfig.lbl_restriccion}}</span>
          </div>
          <div class="cont-gr">
            <div class="field cont-btn">
              <button class="btn btn-primary" @click.prevent="makeRequest()"
              :disabled="errors.has('rut') || disabled || (rut.length == 0)">Consultar</button>
            </div>
          </div>
        </section>

        <section v-if="showResponse">
          <table :class="'msg msg-' + telematico.tableClass + ' msg-2col '">
            <tr>
              <td>
                <span :class="'msg-icono color-' + telematico.spanClass"
                  ><i :class="'fas ' + telematico.classIcon"></i
                ></span>
              </td>
              <td>
                <h3 v-if="telematico.titulo !== ''">{{telematico.titulo}}</h3>
                <hr v-if="telematico.titulo !== ''">
                
                <div class="cont-gr">
                  <p v-if="telematico.subtitulo1 !== ''"><strong>{{telematico.subtitulo1}}</strong></p>
                  <p v-if="telematico.p1 !== ''">
                    {{telematico.p1}}
                  </p>
                </div>

                <div class="cont-gr">
                  <p v-if="telematico.subtitulo2 !== ''"><strong>{{telematico.subtitulo2}}</strong></p>
                  <p v-if="telematico.p2 !== ''">{{telematico.p2}}</p>
                  <ul v-if="telematico.li1 !== '' || telematico.li2Start !== '' || telematico.li3 !== ''">
                    <li v-if="telematico.li1 !== ''">{{telematico.li1}}</li>
                    <li v-if="telematico.li2Start !== ''">
                      {{telematico.li2Start}}
                      <a
                        class="link"
                        target="blank"
                        :href="'https://' + telematico.li2A +'/'"
                        >{{telematico.li2A}}</a
                      >
                      {{telematico.li2End}}
                    </li>
                    <li v-if="telematico.li3 !== ''">
                      {{telematico.li3}}
                      <a class="link" :href="'tel:'+ telematico.li3Href">{{telematico.li3A}}</a>
                    </li>
                  </ul>
                </div>
                <hr />
                <b-button type="is-default" @click.prevent="ingresoClaveUnica()" v-if="telematico.continuar"
                  >{{iConfig.btn_ingresar}}</b-button
                >
                <b-button type="is-default" @click.prevent="pdfTelematico()" v-if="!telematico.continuar"
                  >{{iConfig.btn_generar_pdf}}</b-button
                >
              </td>
            </tr>
          </table>
        </section>

    </div>
  </section>

</template>

<script>
import iConfig from "~/static/json/5220/index.json";

import Vue from "vue";
import VeeValidate, { Validator } from "vee-validate";
import { rutValidator, rutFilter, rutInputDirective } from "vue-dni";

Vue.use(VeeValidate);
Vue.filter("rutFilter", rutFilter);
Vue.directive("rut", rutInputDirective);

export default {
  name: 'HomePage',
  data() {
    return {
      iConfig: iConfig,
      loading: false,
      disabled: false,
      rut: '',
      rutConsultado: '',
      resp: {codRes: 0,
             idSolicitud: 0},
      showResponse: false,
      telematico: {
                    titulo: "",
                    subtitulo1: "",
                    p1: "",
                    subtitulo2: "",
                    p2: "",
                    li1: "",
                    li2Start: "",
                    li2A: "",
                    li2End: "",
                    li3: "",
                    li3A: "",
                    li3Href: "",
                    continuar: false,
                    class: "",
                    classIcon: ""
                  }
    };
  },
  head() {
    return {
      title: this.iConfig.titulo,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.iConfig.descripcion
        }
      ]
    };
  },
  methods: {
    makeRequest() {
      this.showResponse = false;
      this.loading = true;
      this.disabled = true;
      const splitRut = this.rut.split("-");
      const vRut = splitRut[0].replace(/\./g, "");

      const url = process.env.API_STJ_ELEGIBILIDAD;

      this.$axios({
        url: url + vRut + '.json', // TODO: dejar solo 'url + vRut' cuando se integre con back
        method: "GET"
      })
        .then((response) => {
          this.rutConsultado = this.rut;
          this.loading = false;
          if (response.status == "200") {
              this.resp = response.data;
              switch (response.data.codRes) {
                case 1:
                  this.telematico = this.iConfig.telematico_beneficiario
                  break;
                case 2:
                  this.telematico = this.iConfig.telematico_vivo
                  break;
                case 3:
                  this.telematico = this.iConfig.telematico_edad
                  break;
                case 4:
                  this.telematico = this.iConfig.telematico_coti
                  break;
                case 5:
                  this.telematico = this.iConfig.telematico_sol_tramite
                  break;
                case 6:
                  this.telematico = this.iConfig.telematico_sol_tramitada
                  break;

                default:
                  this.telematico = this.iConfig.telematico_error
                  break;
              }
              this.showResponse = true;
            
          }
          
          this.disabled = false;

        })
        .catch((error) => {
          //window.ga('send', 'event', 'Error Ficha transaccional', 'trámite finalizado', 'ID - 70652');
          if (error.response) {
            console.log(error.response);
            this.loading = false;
            this.disabled = false;
            this.telematico = this.iConfig.telematico_error;
            this.showResponse = true;
          }
        });
    },
    ingresoClaveUnica() {
      const splitRut = this.rutConsultado.split("-");
      const vRut = splitRut[0].replace(/\./g, "");
      
      window.localStorage.setItem('userRut', vRut);
      window.localStorage.setItem('userDvRut', splitRut[1]);

      this.$router.push({ path: `/tramites/5220/0` });
    },
    formatRut() {
          
      let clearRut = typeof this.rut === 'string' ? this.rut.replace(/[^0-9kK]+/g, '').toUpperCase() : '';
      if (clearRut.length <= 1) {
          return false
      }
      var result = clearRut.slice(-4, -1) + '-' + clearRut.substr(clearRut.length - 1)
      for (var i = 4; i < clearRut.length; i += 3) {
          result = clearRut.slice(-3 - i, -i) + '.' + result
      }
      this.rut = result
      let rut = this.rut
      if (typeof rut !== 'string') {
          return false
      }
      rut = typeof this.rut === 'string' ? this.rut.replace(/[^0-9kK]+/g, '').toUpperCase() : ''
      var rutDigits = parseInt(rut.slice(0, -1), 10)
      var m = 0
      var s = 1
      while (rutDigits > 0) {
          s = (s + rutDigits % 10 * (9 - m++ % 6)) % 11
          rutDigits = Math.floor(rutDigits / 10)
      }
      var checkDigit = (s > 0) ? String((s - 1)) : 'K'
      if (checkDigit === rut.slice(-1)) {
          this.errores = false;
      } else {
          this.errores = true;
      }
    },
    pdfTelematico() {
      const payload = {
                        titulo: this.telematico.titulo,
                        subtitulo1: this.telematico.subtitulo1,
                        p1: this.telematico.p1,
                        subtitulo2: this.telematico.subtitulo2,
                        p2: this.telematico.p2,
                        li1: this.telematico.li1,
                        li2Start: this.telematico.li2Start,
                        li2A: this.telematico.li2A,
                        li2End: this.telematico.li2End,
                        li3: this.telematico.li3,
                        li3A: this.telematico.li3A
      };
      const url = process.env.API_STJ_DESCARGAR_TELEMATICO;

      this.$axios({
        url: url, // TODO: dejar solo 'url cuando se integre con back
        method: "GET", //TODO: sustituir GET por POST
        payload: payload
      })
        .then((response) => {
          this.rutConsultado = this.rut;
          this.loading = false;
          if (response.status == "200") {
            if (response.data == "No token") {
              this.error_sesion();
            } else {
              window.open(response.data.urlPdf);
            }
          }

        })
        .catch((error) => {
          //window.ga('send', 'event', 'Error Ficha transaccional', 'trámite finalizado', 'ID - 70652');
          if (error.response) {
            error_response('No fué posible generaer el comprobante');
          }
        });
    },
    error_response(error) {

      const notif = this.$buefy.notification.open({
        duration: 4000,
        message: `${error}`,
        position: "is-bottom-right",
        type: "is-danger",
        hasIcon: true
      });
      notif.$on("close", () => {
      });

    }
  },
  created() {
    Validator.extend("rut", rutValidator);
  },
}
</script>
