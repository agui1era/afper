<template>
  <section>
    <div class="form-cha">
      <section class="modal-form">
        <div class="cont-btn">
          <button
            class=" btn btn-default btn-sm"
            @click="abrirModal()">
            {{this.iConfig.boton}}
          </button>
        </div>
        <b-modal :active.sync="isCardModalActive" scroll="keep" :can-cancel="false">
          <form @submit.stop.prevent="modificar()" class="form-cha">
            <div class="modal-card" style="width: auto">
              <header class="modal-card-head columns">
                <table class="modal-header-table">
                  <tr class="tr-btn">
                    <td>
                      <h3 class="modal-card-title">
                        {{this.iConfig.titulo}} <br />
                      </h3>
                    </td>
                    <td>
                      <button class="link btn-icon btn-cerrar" type="button"  @click="isCardModalActive = false">
                        Cerrar
                        <span class="icon"
                          ><i class="oi oi-x icon-btn"></i
                        ></span>
                      </button>
                    </td>
                  </tr>
                </table>
              </header>
              <section class="modal-card-body">
                <div class="cont-gr">
                  <b-field label="Calle, camino o casilla*">
                    <b-input type="text" :value="persona.direccion.calle" @input="updatePersona('direccion', 'calle', $event)" placeholder="" required>
                    </b-input>
                  </b-field>
                </div>
                <div class="cont-gr">
                  <b-field label="Número*">
                    <b-input type="text" :value="persona.direccion.numero" @input="updatePersona('direccion', 'numero', $event)" placeholder="" required>
                    </b-input>
                  </b-field>
                </div>
                <div class="cont-gr">
                  <b-field label="Block / Torre">
                    <b-input type="text" :value="persona.direccion.block" @input="updatePersona('direccion', 'block', $event)" placeholder="">
                    </b-input>
                  </b-field>
                </div>
                <div class="cont-gr">
                  <b-field label="Departamento">
                    <b-input type="text" :value="persona.direccion.depto" @input="updatePersona('direccion', 'depto', $event)" placeholder="">
                    </b-input>
                  </b-field>
                </div>
                <div class="cont-gr">
                  <b-field label="Población / Villa*">
                    <b-input type="text" :value="persona.direccion.poblacion" @input="updatePersona('direccion', 'poblacion', $event)" placeholder="" required>
                    </b-input>
                  </b-field>
                </div>
                <div class="cont-gr">
                  <b-field label="Región*">
                    <b-select :value="persona.direccion.regionId" @input="updatePersona('direccion', 'regionId', $event)" required>
                      <option value="" disabled>Seleccione Región</option>
                      <option v-for="region in regiones" :key="region.id" :value="region.id">{{region.nombre}}</option>
                    </b-select>
                  </b-field>
                </div>
                <div class="cont-gr">
                  <b-field label="Ciudad / Localidad*">
                    <b-input type="text" :value="persona.direccion.ciudad" @input="updatePersona('direccion', 'ciudad', $event)" placeholder="" required>
                    </b-input>
                  </b-field>
                </div>
                <div class="cont-gr">
                  <b-field label="Comuna*">
                    <b-select :value="comuna" v-model="comuna" @input="updatePersona('direccion', 'comunaId', $event)" required>
                      <option value="">Seleccione Comuna</option>
                      <option v-for="comuna in comunas" :key="comuna.id" :value="comuna.id">{{comuna.nombre}}</option>
                    </b-select>
                  </b-field>
                </div>
                <div class="cont-gr">
                  <b-field label="Teléfono de contacto*">
                    <b-input type="text" :value="persona.telefono" @keyup="validateInput($event)" @input="updatePersona('telefono', null, $event)" placeholder="" required>
                    </b-input>
                  </b-field>
                  <span class="input-info"
                    >Ejemplos: Móvil: [ 9 ] 123 4567 / Fijo: [52] 123 4567</span
                  >
                </div>
                <div class="cont-gr">
                  <b-field label="Corréo electrónico trabajador*">
                    <b-input
                      type="email"
                      :value="persona.correo"
                      @input="updatePersona('correo', null, $event)"
                      placeholder=""
                      required
                    >
                    </b-input>
                  </b-field>
                </div>
                <div class="cont-gr">
                  <div class="msg-dialog">
                    {{this.iConfig.info_correo}}
                  </div>
                </div>
                <span>{{this.iConfig.lbl_restriccion}}</span>
                <br>
              </section>
              <footer class="modal-card-foot">
                <button class="btn btn-primary is-primary" type="submit" >Guardar</button>
                <button
                  class="btn btn-default"
                  type="button"
                  @click="isCardModalActive = false"
                >
                  Cancelar
                </button>
              </footer>
            </div>
          </form>
        </b-modal>
      </section>
    </div>
  </section>
</template>

<script>
import iConfig from "~/static/json/5220/modalEditarContactoPersona.json";

export default {
  data() {
    return {
      iConfig: iConfig,
      isCardModalActive: false,
      persona: {
        nombres: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        rut: "",
        fechaNac: 0,
        edad: 0,
        telefono: "",
        correo: "",
        direccion: { calle: "",
                     numero: "",
                     poblacion: "",
                     block: "",
                     depto: "",
                     regionId: "",
                     ciudad: "",
                     comunaId: ""
                    }
      },
      personaOut: {},
      regiones: [
        {
          id: "",
          nombre: ""
        }
      ],
      comunas: [
        {
          id: "",
          nombre: ""
        }
      ],
      comuna: ""
    };
  },
  computed: {

  },
  methods: {
    abrirModal() {
      this.persona = this.$store.getters['getPersona'];
      this.personaOut = JSON.parse(JSON.stringify(this.persona));
      this.regiones = this.$store.state.regiones;
      this.buscarComuna(this.persona.direccion.regionId);

      this.isCardModalActive = true;
    },
    updatePersona(campo1, campo2, valor) {
      if (campo2 === 'regionId') {
          this.buscarComuna(valor);
          this.comuna = ""
      }
      if (!campo2) {
        this.personaOut[campo1] = valor;
      } else {
        this.personaOut[campo1][campo2] = valor;
      }
    },
    validateInput(evt) {
      evt = (evt) ? evt : window.event;
      const charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46 && charCode !== 219 && charCode !== 221) {
        return false;
      } else {
        return true;
      }
    },
    modificar() {
      this.$store.commit('SET_PERSONA', this.personaOut);
      this.isCardModalActive = false;
    },
    async buscarComuna(region) {

      const url = process.env.API_STJ_OBTENER_COMUNAS;

      this.comunas = await this.$axios({
          url: url + region + ".json", // TODO: dejar solo 'url' cuando se integre con back
          method: "GET"
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
                this.error_response('comunas de la región');
              }
            }
            return null;
          });
      this.comuna = this.persona.direccion.comunaId;
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
        message: `Error al cargar ${error}`,
        position: "is-bottom-right",
        type: "is-danger",
        hasIcon: true
      });
      notif.$on("close", () => {
      });

    },
  }
};
</script>
