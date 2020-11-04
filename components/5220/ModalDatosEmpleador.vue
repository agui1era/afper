<template>
    <section>
        <div class="container form-cha">
            <section class="modal-form">
                
                <button @click="modalInit" href="#" itle: class="link btn-icon" :disabled="habilitarAgregar || $store.state.resumenSolicitud.codRes === 5"><span class="icon"><i class="oi oi-plus icon-btn"></i></span> <span>{{this.iConfig.boton}}</span></button>

                <b-modal :active.sync="modalActive" scroll="keep" :can-cancel="false">
                <form @submit.prevent="guardar()">
                    <div class="modal-card" style="width: auto">
                        <header class="modal-card-head columns">
                            <table class="modal-header-table">
                                <tr class="tr-btn">
                                    <td>
                                        <h3 class="modal-card-title">{{this.nuevo ? this.iConfig.titulo_agregar : this.iConfig.titulo_editar}}<br></h3>     
                                    </td>
                                    <td><button class="link btn-icon btn-cerrar" type="button" @click="$store.commit('CHANGE_MODAL_EMPLEADOR_ACTIVE', false)">Cerrar <span class="icon"><i class="oi oi-x icon-btn"></i></span> </button></td>
                                </tr>
                            </table>   
                         </header>
                        <section class="modal-card-body">
                            <div class="cont-gr">
                                    <b-field label="RUT Empresa*" 
                                    :type="{ 'is-danger': errors.has('rut') }"
                                    :message="{ 'Ingrese un RUT válido': errors.has('rut') }">
                                        <b-input 
                                            :value="empleador.rut" 
                                            v-model="empleadorOut.rut" 
                                            @input="updateEmpleador('rut', null, $event)" 
                                            required
                                            id="rut"
                                            name="rut" 
                                            v-validate="'rut'"
                                            :keyup="formatRut()"
                                            @blur="buscarEmpresa()"
                                            :disabled="empleadorOut.nombre"></b-input>
                                    </b-field>   
                            </div>
                            <div class="cont-gr">
                                    <b-field label="Nombre / Razón social*">
                                        <b-input :value="empleador.nombre" v-model="empleadorOut.nombre" @input="updateEmpleador('nombre', null, $event)" :disabled="empleadorOut.nombre"></b-input>
                                    </b-field>        
                            </div>
                            <div class="cont-gr">
                                    <b-field label="Calle, camino o casilla*">
                                        <b-input :value="empleador.direccion.calle" v-model="empleadorOut.direccion.calle" @input="updateEmpleador('direccion', 'calle', $event)" required></b-input>
                                    </b-field>       
                            </div>
                            <div class="cont-gr">                                        
                                    <b-field label="Número*">
                                        <b-input :value="empleador.direccion.numero" v-model="empleadorOut.direccion.numero" @input="updateEmpleador('direccion', 'numero', $event)" required></b-input>
                                    </b-field>
                            </div>
                            <div class="cont-gr">                                     
                                    <b-field label="Oficina*">
                                        <b-input :value="empleador.direccion.oficina" v-model="empleadorOut.direccion.oficina" @input="updateEmpleador('direccion', 'oficina', $event)" required></b-input>
                                    </b-field>   
                            </div>
                            <div class="cont-gr">
                                    <b-field label="Ciudad*">
                                        <b-input :value="empleador.direccion.ciudad" v-model="empleadorOut.direccion.ciudad" @input="updateEmpleador('direccion', 'ciudad', $event)" required></b-input>
                                    </b-field>             
                            </div>                        
                            <div class="cont-gr">
                                    <b-field label="Región*">
                                        <b-select placeholder="" :value="empleador.direccion.regionId" v-model="empleadorOut.direccion.regionId" @input="updateEmpleador('direccion', 'regionId', $event)" required>
                                            <option value="" disabled>Seleccione Región</option>
                                            <option v-for="region in regiones" :key="region.id" :value="region.id">{{region.nombre}}</option>
                                        </b-select>
                                    </b-field>
                            </div>
                            <div class="cont-gr">
                                    <b-field label="Comuna*">
                                        <b-select placeholder="" :value="empleador.direccion.comunaId" v-model="empleadorOut.direccion.comunaId" @input="updateEmpleador('direccion', 'comunaId', $event)" required>
                                            <option value="" disabled>Seleccione Comuna</option>
                                            <option v-for="comuna in comunas" :key="comuna.id" :value="comuna.id">{{comuna.nombre}}</option>
                                        </b-select>
                                    </b-field>
                            </div>   
                            <div class="cont-gr">
                                    <b-field label="Teléfono de contacto*">
                                        <b-input :value="empleador.telefono" v-model="empleadorOut.telefono" @input="updateEmpleador('telefono', null, $event)" required></b-input>
                                    </b-field>    
                            <span class="input-info">{{this.iConfig.ejemplo_mov}}</span>           
                            </div>
                            <div class="cont-gr">
                             <b-field label="Corréo electrónico*">
                               <b-input
                                 type="email"
                                 :value="empleador.correo"
                                 v-model="empleadorOut.correo"
                                 @input="updateEmpleador('correo', null, $event)"
                                 placeholder=""
                                 required
                               >
                               </b-input>
                             </b-field>
                            </div>
                            <span>{{this.iConfig.lbl_restriccion}}</span>
                            <br><br>

                        </section>
                        <footer class="modal-card-foot">
                            <button class="btn btn-primary" type="submit" :disabled="errors.has('rut')">Guardar</button>
                            <button class="btn btn-default" type="button" @click="$store.commit('CHANGE_MODAL_EMPLEADOR_ACTIVE', false)" >Cancelar</button>
                            <!--<button class="btn btn-danger">Eliminar</button>-->
                        </footer>
                    </div>
                </form>
            </b-modal>
            </section>
        </div>
    </section>
</template>

<script>
import Vue from "vue";
import VeeValidate, { Validator } from "vee-validate";
import { rutValidator, rutFilter, rutInputDirective } from "vue-dni";
import iConfig from "~/static/json/5220/modalAgregarEditarDatosEmpleador.json";

Vue.use(VeeValidate);
Vue.filter("rutFilter", rutFilter);
Vue.directive("rut", rutInputDirective);
    export default {
        data() {
            return {
                iConfig: iConfig,
                nuevo: false,
                comunas: [
                            {
                              id: "",
                              nombre: ""
                            }
                         ],
                empleadorOut: {  
                nombre: null,
                rut: null,
                telefono: null,
                correo: null,
                rutAfp: null,
                direccion: { calle: null,
                             numero: null,
                             oficina: null,
                             regionId: "",
                             ciudad: null,
                             comunaId: ""
                           }}
            }
        },
        computed: {
          modalActive() {
            if (this.$store.state.modalEmpleadorActive) {
                this.empleadorOut = JSON.parse(JSON.stringify(this.$store.state.empleador));
            }
            return this.$store.state.modalEmpleadorActive;
          },
          empleador() {
            const emp = this.$store.state.empleador;
            if (emp.direccion.regionId) {
                this.buscarComuna(emp.direccion.regionId);
                this.nuevo = false;
            }
            return emp;
          },
          regiones() {
            return this.$store.state.regiones;
          },
          habilitarAgregar() {
            return this.$store.state.empleadores.length > 1;
          }
        },
        created() {
          Validator.extend("rut", rutValidator);
        },
        methods: {
            modalInit() {
                const empleador = {  
                                    nombre: null,
                                    rut: null,
                                    telefono: null,
                                    correo: null,
                                    rutAfp: null,
                                    direccion: { calle: null,
                                                 numero: null,
                                                 oficina: null,
                                                 regionId: "",
                                                 ciudad: null,
                                                 comunaId: ""
                                               }};
                this.nuevo = true;
                this.$store.commit('SET_EMPLEADOR', empleador);
                this.$store.commit('CHANGE_MODAL_EMPLEADOR_ACTIVE', true);
            },
            updateEmpleador(campo1, campo2, valor) {
              if (campo2 === 'regionId') {
                  this.buscarComuna(valor);
                  this.empleadorOut.direccion.comunaId = ""
              }
              if (!campo2) {
                this.empleadorOut[campo1] = valor;
              } else {
                this.empleadorOut[campo1][campo2] = valor;
              }
            },
            async guardar() {
                const empleadores = this.$store.state.empleadores;
                const empleador = JSON.parse(JSON.stringify(this.empleadorOut));
                const rut = empleador.rut.replace(/\./g, '');
                empleador.rut = rut;
                if (this.nuevo) {
                  const empleadorExiste = empleadores.find(empl => empl.rut === rut);
                  if (empleadorExiste) {
                    this.error_response(this.iConfig.error_empleador_duplicado);
                  } else {
                    if (await this.ingresarEmpresa(empleador)) {
                      this.$store.commit('AGG_EMPLEADOR', empleador);
                      this.$store.commit('CHANGE_MODAL_EMPLEADOR_ACTIVE', false);
                    } else {
                      this.error_response(this.iConfig.error_ingreso_empleador);
                    }
                  }
                } else {
                  if (await this.ingresarEmpresa(empleador)) {
                    const index = empleadores.map(function(e) { 
                                    return e.rut; 
                                  }).indexOf(rut);
                    this.$store.commit('UPD_EMPLEADOR', {index: index, empleador: empleador});
                    this.$store.commit('CHANGE_MODAL_EMPLEADOR_ACTIVE', false);
                  } else {
                    this.error_response(this.iConfig.error_modificacion_empleador);
                  }
                }
            },
            async ingresarEmpresa(empleador) {
              const rutArray = empleador.rut.split('-');
              const payload = {
                                razonSocial: empleador.nombre,
                                rut: Number(rutArray[0]),
                                dv: rutArray[1],
                                telefono: empleador.telefono,
                                email: empleador.correo,
                                direccion: empleador.direccion
                              };
              console.log('PASO', payload);
              return true; //TODO: Eliminar esta linea al descomentar el procedimiento
              // TODO: Descomentar cuando este disponible el servicio y agregar la ruta al .env
              /*const url = process.env.API_STJ_INGRESAR_EMPRESA;
              
              await this.$axios({
                  url: url,
                  method: "POST",
                  payload: payload
                })
                  .then((response) => {
                    if (response.status == "201") {
                      if (response.data == "No token") {
                        this.error_sesion();
                        return false;
                      } else {
                        return true;
                      }
                    } else {
                      return false;
                    }
                  })
                  .catch((error) => {
                    //window.ga('send', 'event', 'Error Ficha transaccional', 'trámite finalizado', 'ID - 70652');
                    if (error.response) {
                      console.log(error.response);

                      if (error.response.status == 403) {
                        this.error_sesion();
                      } else {
                        this.error_response('Error al ingresar el empleador');
                      }
                    }
                    return false;
                  });*/
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
                        this.error_response('Error al cargar comunas de la región');
                      }
                    }
                    return null;
                  });
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
            formatRut() {
          
              let clearRut = typeof this.empleadorOut.rut === 'string' ? this.empleadorOut.rut.replace(/[^0-9kK]+/g, '').toUpperCase() : '';
              if (clearRut.length <= 1) {
                  return false
              }
              var result = clearRut.slice(-4, -1) + '-' + clearRut.substr(clearRut.length - 1)
              for (var i = 4; i < clearRut.length; i += 3) {
                  result = clearRut.slice(-3 - i, -i) + '.' + result
              }
              this.empleadorOut.rut = result
              let rut = this.empleadorOut.rut
              if (typeof rut !== 'string') {
                  return false
              }
              rut = typeof this.empleadorOut.rut === 'string' ? this.empleadorOut.rut.replace(/[^0-9kK]+/g, '').toUpperCase() : ''
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
            buscarEmpresa() {
              if (this.empleadorOut.rut) {

                const rutArray = this.empleadorOut.rut.split('-');
                const rut = rutArray[0].replace(/\./g, '');

                const url = process.env.API_STJ_DATOS_EMPRESA;

                this.$axios({
                  url: url + rut + '.json', // TODO: dejar solo 'url' cuando se integre con back
                  method: "GET"
                })
                  .then(async (response) => {

                    if (response.status == "200") {
                      if (response.data == "No token") {
                        this.error_sesion();
                      } else {
                        const resp = response.data;
                        await this.buscarComuna(resp.direccion.regionId);
                        this.empleadorOut.rut = resp.run + '-' + resp.runDV;
                        this.empleadorOut.nombre = resp.razonSocial;
                        this.empleadorOut.telefono = resp.preFono + ' ' +resp.fono;
                        this.empleadorOut.correo = resp.email;
                        this.empleadorOut.direccion = resp.direccion;
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
                        this.error_response('Error al cargar datos de la empresa');
                        this.$store.commit('CHANGE_MODAL_EMPLEADOR_ACTIVE', false)
                      }
                    }
                  });
              }
            }
        }
    }
</script>