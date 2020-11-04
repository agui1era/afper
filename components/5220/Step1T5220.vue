<template>
  <section>
    <!-- PASO 2 -->
    <div class="container form-cha">
      <header>
        <h4>
          {{this.iConfig.proveedor_servicio}}
          <a
            class="link"
            href="https://www.chileatiende.gob.cl/instituciones/AL005"
            title="Institución asociada"
          >
            {{this.iConfig.nombre_proveedor_servicio}}
          </a>
        </h4>
        <h1>{{this.iConfig.titulo}}</h1>
        <Progress-bar :steps="3" :active="1" />
      </header>
      <section>
        <header>
          <h2>{{this.iConfig.Subtitulo_h2}}</h2>
        </header>
        <div class="form-sector">
          <header>
            <h2>{{datosPersona.nombres + " " + datosPersona.apellidoPaterno + " " + datosPersona.apellidoMaterno}}</h2>
            <h3 class="rut">{{formatRut(datosPersona.rut)}}</h3>
          </header>
          <div class="cont-gr span-gr">
            <span>Fecha de nacimiento</span>
            <span><strong>{{formatFecha(datosPersona.fechaNac)}}, {{datosPersona.edad}} años</strong></span>
          </div>
          <div class="cont-gr span-gr">
            <span>Dirección</span>
            <span v-if="datosPersona.direccion.calle !== null && datosPersona.direccion.calle !== ''">
              <strong>
                {{datosPersona.direccion.calle}}, 
                {{datosPersona.direccion.numero}}, 
                {{datosPersona.direccion.block !== null && datosPersona.direccion.block !== '' ? 'Block / Torreo ' + datosPersona.direccion.block + ',' : ''}}
                {{datosPersona.direccion.depto !== null && datosPersona.direccion.depto !== '' ? 'Departamento ' + datosPersona.direccion.depto + ',' : ''}}
                {{datosPersona.direccion.poblacion}}, 
                {{datosPersona.direccion.ciudad}}, 
                {{obtenerNombreComuna(datosPersona.direccion.comunaId)}}, 
                {{obtenerNombreRegion(datosPersona.direccion.regionId)}}.
              </strong>
            </span>
          </div>
          <div class="cont-gr span-gr">
            <span>Contacto</span>
            <span><strong>{{datosPersona.telefono}}</strong></span>
            <span><a href="#">{{datosPersona.correo}}</a></span>
          </div>
          <ModalDatosContacto />
        </div>
        <div class="form-sector">
          <header>
            <h3>{{this.iConfig.subtitulo_h3_1}}</h3>
          </header>
          <div class="cont-gr">
            <label class="label" for="afp">AFP*</label>
            <div class="control">
              <div class="select">
                <select id="afp" :value="this.previsionPersona.afp.id" v-model="pAfp">
                  <option value="" disabled>Seleccione AFP</option>
                  <option v-for="afp in prevision.listaAfp" :key="afp.codAfp" :value="afp.rutAfp">{{afp.descAfp}}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="cont-gr">
            <label class="label" for="salud"
              >Seleccione Régimen de salud*</label
            >
            <div class="control">
              <div class="select">
                <select id="salud" :value="this.previsionPersona.salud.id" v-model="pSalud">
                  <option value="" disabled>Seleccione Regimen de Salud</option>
                  <option v-for="salud in prevision.listaMutual" :key="salud.cCaja" :value="salud.cCaja">{{salud.descCaja}}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="cont-gr">
            <label class="label" for="mutual">Mutual*</label>
            <div class="control">
              <div class="select">
                <select id="mutual" :value="this.previsionPersona.mutual.id" v-model="pMutual">
                  <option value="" disabled>Seleccione Mutual</option>
                  <option v-for="mutual in prevision.listaSalud" :key="mutual.iSalud" :value="mutual.iSalud">{{mutual.descSalud}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="form-sector">
          <header>
            <h3>{{this.iConfig.subtitulo_h3_2}}</h3>
          </header>
          <TablaEmpleadores/>
          <ModalDatosEmpleador />
          <div class="cont-gr">
            <div class="field">
              <b-checkbox type="is-info" v-model="incompatibleSIS">
                {{this.iConfig.checkbox1_text}}
              </b-checkbox>
            </div>
          </div>
          <br />
          <div class="cont-gr">
            <div class="field">
              <b-checkbox type="is-info" v-model="suspencionSubsidio">
                {{this.iConfig.checkbox2_text}}
              </b-checkbox>
            </div>
          </div>
        </div>
        <div class="cont-req">
          <span>{{this.iConfig.lbl_restriccion}}</span>
        </div>
        <div class="cont-btn">
          <b-button type="is-primary" v-on:click="nextStep">Continuar</b-button>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import iConfig from "~/static/json/5220/Step1T5220.json";
import ModalDatosContacto from "./ModalDatosContacto.vue";
import ModalDatosEmpleador from "./ModalDatosEmpleador.vue";
import TablaEmpleadores from "./TablaEmpleadores.vue";
import ProgressBar from "../ProgressBar.vue";

export default {
  name: "StepOne",
  data() {
    return {
      iConfig: iConfig,
      regiones: [],
      comunas: [],
      prevision: {
                    listaAfp: null,
                    listaMutual: null,
                    listaSalud: null
                 },
      pMutual: "",
      pSalud: "",
      pAfp: "",
      incompatibleSIS: false,
      suspencionSubsidio: false

    }
  },
  async beforeCreate() {

    let url = process.env.API_STJ_OBTENER_REGIONES;
    let region = 0;
    this.regiones = await this.$axios({
          url: url,
          method: "GET",
        })
          .then((response) => {
            if (response.status == "200") {
              if (response.data == "No token") {
                this.error_sesion();
              } else {
                this.$store.commit('SET_REGIONES', response.data)
                return response.data;
              }
            }
          })
          .catch((error) => {
            //window.ga('send', 'event', 'Error Ficha transaccional', 'trámite finalizado', 'ID - 70652');
            if (error.response) {
              console.log(error.response);
  
              if (error.response.status == 403) {
                this.error_sesion();
              } else {
                this.error_response('Error al cargar regiones');
              }
            }
            return null;
          });


      
    const rut = window.localStorage.getItem('userRut');
    const dv = window.localStorage.getItem('userDvRut');

    if (this.datosPersona.nombres === "") {

      url = process.env.API_STJ_DATOS_PERSONA;
  
      await this.$axios({
        url: url + rut + '.json', // '/' + dv          TODO: dejar solo 'url' mas rut + dv cuando se integre con back
        method: "GET",
      })
        .then((response) => {
          if (response.status == "200") {
            if (response.data == "No token") {
              this.error_sesion();
            } else {
              region = response.data.direccion.regionId;
              this.$store.commit('SET_PERSONA', response.data)
            }
          }
        })
        .catch((error) => {
          //window.ga('send', 'event', 'Error Ficha transaccional', 'trámite finalizado', 'ID - 70652');
          if (error.response) {
            console.log(error.response);
  
            if (error.response.status == 403) {
                this.error_sesion();
              } else {
                this.error_response('Error al cargar datos de la persona');
              }
          }
        });
    } else {
      region = this.datosPersona.direccion.regionId;
    }

    if (this.$store.state.empleadores.length === 0) {

      url = process.env.API_STJ_DATOS_EMPLEADORES;
  
      await this.$axios({
        url: url + rut + '.json', // TODO: dejar solo 'url' cuando se integre con back
        method: "GET",
      })
        .then((response) => {
          if (response.status == "200") {
            if (response.data == "No token") {
              this.error_sesion();
            } else {
              this.$store.commit('SET_EMPLEADORES', response.data);
              this.pAfp = response.data[0].rutAfp;
            }
          }
        })
        .catch((error) => {
          //window.ga('send', 'event', 'Error Ficha transaccional', 'trámite finalizado', 'ID - 70652');
          if (error.response) {
            console.log(error.response);
  
            if (error.response.status == 403) {
                this.error_sesion();
              } else {
                this.error_response('Error al cargar empleadores asociados a la persona');
              }
          }
        });
    } else {
      this.pAfp = this.previsionPersona.afp.id;
      this.pSalud = this.previsionPersona.salud.id;
      this.pMutual = this.previsionPersona.mutual.id;
    }

    if (this.previsionPersona.salud.id === "" && this.$store.state.resumenSolicitud.codRes === 5) {
      url = process.env.API_STJ_CONSULTAR_SOLICITUD;
    
      await this.$axios({
        url: url + this.$store.state.resumenSolicitud.idSolicitud + '.json', // TODO: dejar solo 'url' cuando se integre con back
        method: "GET",
      })
        .then((response) => {
          if (response.status == "200") {
            if (response.data == "No token") {
              this.error_sesion();
            } else {
              this.pAfp = response.data.afpTrabajador;
              this.pSalud = response.data.regSaludTrabajador;
              this.pMutual = response.data.mutualTrabajador;
            }
          }
        })
        .catch((error) => {
          //window.ga('send', 'event', 'Error Ficha transaccional', 'trámite finalizado', 'ID - 70652');
          if (error.response) {
            console.log(error.response);
    
            if (error.response.status == 403) {
                this.error_sesion();
              } else {
                this.error_response('Error al cargar información de la solicitud');
              }
          }
        });
    }
    
    
    url = process.env.API_STJ_OBTENER_COMUNAS;

    this.comunas = await this.$axios({
        url: url + region + ".json", // TODO: dejar solo 'url' cuando se integre con back
        method: "GET",
      })
        .then((response) => {
          if (response.status == "200") {
            if (response.data == "No token") {
              this.error_sesion();
            } else {
              return response.data;
            }
          }
        })
        .catch((error) => {
          //window.ga('send', 'event', 'Error Ficha transaccional', 'trámite finalizado', 'ID - 70652');
          if (error.response) {
            console.log(error.response);

            if (error.response.status == 403) {
              this.error_sesion();
            } else {
              this.error_response('Error al cargar comunas de la región');
            }
          }
          return null;
        });

    url = process.env.API_STJ_OBTENER_PREVISIONES;

    this.prevision = await this.$axios({
        url: url,
        method: "GET",
      })
        .then((response) => {
          if (response.status == "200") {
            if (response.data == "No token") {
              this.error_sesion();
            } else {
              return response.data;
            }
          }
        })
        .catch((error) => {
          //window.ga('send', 'event', 'Error Ficha transaccional', 'trámite finalizado', 'ID - 70652');
          if (error.response) {
            console.log(error.response);

            if (error.response.status == 403) {
              this.error_sesion();
            } else {
              this.error_response('Error al cargar datos previsionales');
            }
          }
          return null;
        });
  },
  computed: {
    datosPersona() {
      return this.$store.state.persona;
    },
    previsionPersona() {
      return this.$store.state.previsionPersona;
    }
  },
  // props: ['ambito'],
  components: {
    ModalDatosContacto,
    ModalDatosEmpleador,
    TablaEmpleadores,
    ProgressBar
  },
  methods: {
    nextStep() {
      const mensajes = [];
      if (this.datosPersona.direccion.calle === '' || this.datosPersona.direccion.calle === null ||
          this.datosPersona.direccion.numero === '' || this.datosPersona.direccion.numero === null ||
          this.datosPersona.direccion.poblacion === '' || this.datosPersona.direccion.poblacion === null ||
          this.datosPersona.direccion.regionId === '' || this.datosPersona.direccion.regionId === null ||
          this.datosPersona.direccion.ciudad === '' || this.datosPersona.direccion.ciudad === null ||
          this.datosPersona.direccion.comunaId === '' || this.datosPersona.direccion.comunaId === null ||
          this.datosPersona.direccion.telefono === '' || this.datosPersona.direccion.telefono === null ||
          this.datosPersona.direccion.correo === '' || this.datosPersona.direccion.correo === null) {
            mensajes.push(this.iConfig.msg_error_datos_contacto);
      }
      if (this.pAfp === "" ) {
        mensajes.push(this.iConfig.msg_error_afp);
      } else {
        this.$store.commit('SET_PREVISION', { 
                                              tipo: 'afp', 
                                              id: this.pAfp, 
                                              nombre: this.prevision.listaAfp.find(x => x.rutAfp === this.pAfp).descAfp
                                            }); 
      }
      if (this.pSalud === "" ) {
        mensajes.push(this.iConfig.msg_error_salud);
      } else {
        this.$store.commit('SET_PREVISION', {
                                              tipo: 'salud', 
                                              id: this.pSalud, 
                                              nombre: this.prevision.listaSalud.find(x => x.iSalud === this.pSalud).descSalud
                                            });
      } 
      if (this.pMutual === "" ) {
        mensajes.push(this.iConfig.msg_error_mutual);
      } else {
        this.$store.commit('SET_PREVISION', {
                                              tipo: 'mutual', 
                                              id: this.pMutual, 
                                              nombre: this.prevision.listaMutual.find(x => x.cCaja === this.pMutual).descCaja
                                            });
      } 
      if (this.$store.state.empleadores.length < 1) {mensajes.push(this.iConfig.msg_error_empleadores)}
      if (!this.incompatibleSIS || !this.suspencionSubsidio) {mensajes.push(this.iConfig.msg_toma_conocimiento)} 

      if (mensajes.length > 0) {
        for (const mensaje of mensajes) {
          this.error_response(mensaje);
        }
      } else {
        const nextNum = 2;
        this.$store.commit('SET_COMUNA', this.obtenerNombreComuna(this.datosPersona.direccion.comunaId))
        this.$store.commit('SET_STEP_STJ', nextNum);
        this.$router.push({ path: `/tramites/5220/${nextNum}` });
      }


    },
    error_sesion() {

      const notif = this.$buefy.notification.open({
        duration: 4000,
        message: `Sesion expirada, redirigiendo a pantalla de login`,
        position: "is-bottom-right",
        type: "is-danger",
        hasIcon: true
      });
      notif.$on("close", () => {
        this.$store.dispatch('logout');
        window.location.reload(true);
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

    },
    formatRut(rut) {
          
      let clearRut = typeof rut === 'string' ? rut.replace(/[^0-9kK]+/g, '').toUpperCase() : '';
      let result = clearRut.slice(-4, -1) + '-' + clearRut.substr(clearRut.length - 1)
      for (let i = 4; i < clearRut.length; i += 3) {
          result = clearRut.slice(-3 - i, -i) + '.' + result
      }
      return result;

    },
    formatFecha(timestamp) {

      const date = new Date(timestamp * 1000);
      const months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
      const year = date.getFullYear();
      const month = months[date.getMonth()];
      const day = date.getDate() + 1;

      return day + ' de ' + month + ' ' + year;

    },
    obtenerNombreRegion(idRegion) {
      if (this.regiones) {
        const region = this.regiones.find((reg) => reg.id === idRegion);
        if (region) {
          return region.nombre;
        } else {
          return "";
        }
      } else {
        return "";
      }
    },
    obtenerNombreComuna(idComuna) {
      if (this.comunas) {
        const comuna = this.comunas.find((com) => com.id === idComuna);
        if (comuna) {
          return comuna.nombre;
        } else {
          return "";
        }
      } else {
        return "";
      }
    }
  },

};
</script>
