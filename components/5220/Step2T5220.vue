<template>
  <section>
    <div class="container form-cha">
      <header>
        <h4>
          {{iConfig.proveedor_servicio}}
          <a
            class="link"
            href="https://www.chileatiende.gob.cl/instituciones/AL005"
            title="Institución asociada"
          >
            {{iConfig.nombre_proveedor_servicio}}
          </a>
        </h4>
        <h1>{{iConfig.titulo}}</h1>

        <Progress-bar :steps="3" :active="2" />
      </header>
      <section>
        <header>
          <h2>{{iConfig.subtitulo_h2}}</h2>
          <p>
            {{iConfig.p}}
          </p>
        </header>
        <b-collapse
          class="colap-barra"
          animation="slide"
          aria-id="identificacionTrabajador"
        >
          <div
            slot="trigger"
            slot-scope="props"
            class="colap-button"
            role="button"
            aria-controls="identificacionTrabajador"
          >
            <h2 class="colap-header">
              {{iConfig.subtitulo_h2_2}}
            </h2>
            <a class="card-header-icon">
              <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
            </a>
          </div>
          <div class="colap-cont">
            <div class="content">
              <div class="cont-gr span-gr">
                <span>RUN Trabajador</span>
                <span><strong>{{formatRut(datosPersona.rut)}}</strong></span>
              </div>
              <div class="cont-gr span-gr">
                <span>Nombres</span>
                <span><strong>{{datosPersona.nombres}}</strong></span>
              </div>
              <div class="cont-gr span-gr">
                <span>Apellido paterno</span>
                <span><strong>{{datosPersona.apellidoPaterno}}</strong></span>
              </div>
              <div class="cont-gr span-gr">
                <span>Apellido maternor</span>
                <span><strong>{{datosPersona.apellidoMaterno}}</strong></span>
              </div>
              <div class="cont-gr span-gr">
                <span>Fecha de nacimiento</span>
                <span><strong>{{formatFecha(datosPersona.fechaNac)}}</strong></span>
              </div>
              <div class="cont-gr span-gr">
                <span>Edad</span>
                <span><strong>{{datosPersona.edad}}</strong></span>
              </div>
              <div class="cont-gr span-gr">
                <span>Calle, camino o casilla</span>
                <span><strong>{{datosPersona.direccion.calle}}</strong></span>
              </div>
              <div class="cont-gr span-gr">
                <span>Número</span>
                <span><strong>{{datosPersona.direccion.numero}}</strong></span>
              </div>
              <div class="cont-gr span-gr" v-if="datosPersona.direccion.block !== null && datosPersona.direccion.block !== ''">
                <span>Block / Torre</span>
                <span><strong>{{datosPersona.direccion.block}}</strong></span>
              </div>
              <div class="cont-gr span-gr" v-if="datosPersona.direccion.depto !== null && datosPersona.direccion.depto !== ''">
                <span>Departamento</span>
                <span><strong>{{datosPersona.direccion.depto}}</strong></span>
              </div>
              <div class="cont-gr span-gr">
                <span>Población / Villa</span>
                <span><strong>{{datosPersona.direccion.poblacion}}</strong></span>
              </div>
              <div class="cont-gr span-gr">
                <span>Región</span>
                <span><strong>{{obtenerNombreRegion(datosPersona.direccion.regionId)}}</strong></span>
              </div>
              <div class="cont-gr span-gr">
                <span>Comuna</span>
                <span><strong>{{comuna}}</strong></span>
              </div>
              <div class="cont-gr span-gr">
                <span>Ciudad / Localidad</span>
                <span><strong>{{datosPersona.direccion.ciudad}}</strong></span>
              </div>
              <div class="cont-gr span-gr">
                <span>Teléfono de contacto</span>
                <span><strong>{{datosPersona.telefono}}</strong></span>
              </div>
              <div class="cont-gr span-gr">
                <span>Correo electrónico trabajador</span>
                <span><strong>{{datosPersona.correo}}</strong></span>
              </div>
            </div>
          </div>
        </b-collapse>
        <b-collapse
          class="colap-barra"
          animation="slide"
          aria-id="antedecentesLaborales"
          :open="false"
        >
          <div
            slot="trigger"
            slot-scope="props"
            class="colap-button"
            role="button"
            aria-controls="antedecentesLaborales"
          >
            <h2 class="colap-header">
              {{iConfig.subtitulo_h2_3}}
            </h2>
            <a class="card-header-icon">
              <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
            </a>
          </div>
          <div class="colap-cont">
            <div class="content">
              <div class="cont-gr span-gr">
                <span>AFP</span>
                <span><strong>{{previsionPersona.afp.nombre}}</strong></span>
              </div>
              <div class="cont-gr span-gr">
                <span>Regimen de salud</span>
                <span><strong>{{previsionPersona.salud.nombre}}</strong></span>
              </div>
              <div class="cont-gr span-gr">
                <span>Mutual</span>
                <span><strong>{{previsionPersona.mutual.nombre}}</strong></span>
              </div>
            </div>
          </div>
        </b-collapse>
        <b-collapse
          class="colap-barra"
          animation="slide"
          aria-id="empleadorServicios"
          :open="false"
        >
          <div
            slot="trigger"
            slot-scope="props"
            class="colap-button"
            role="button"
            aria-controls="empleadorServicios"
          >
            <h2 class="colap-header">
              {{iConfig.subtitulo_h2_4}}
            </h2>
            <a class="card-header-icon">
              <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
            </a>
          </div>
          <div class="colap-cont">
            <div class="content">
              <div v-for="(empleador, i) in datosEmpleadores" :key="i">
                <div class="cont-gr span-gr">
                  <span>Razón Social</span>
                  <span><strong>{{empleador.nombre}}</strong></span>
                </div>
                <div class="cont-gr span-gr">
                  <span>RUT</span>
                  <span><strong>{{formatRut(empleador.rut)}}</strong></span>
                </div>
                <div class="cont-gr span-gr">
                  <span>Mail</span>
                  <span><strong>{{empleador.correo}}</strong></span>
                </div>
                <hr v-if="i < datosEmpleadores.length - 1" />
              </div>
            </div>
          </div>
        </b-collapse>
        <br />
        <div class="cont-btn">
          <b-button type="is-primary" v-on:click="nextStep">Confirmar</b-button>
          <b-button type="is-default" v-on:click="prevStep">Volver</b-button>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import iConfig from "~/static/json/5220/Step2T5220.json";
import ProgressBar from "../ProgressBar.vue";

export default {
  name: "StepTwo",
  data() {
    return {
      iConfig: iConfig,
      payload: null
    }
  },
  computed: {
    datosPersona() {
      return this.$store.state.persona;
    },
    datosEmpleadores() {
      return this.$store.state.empleadores;
    },
    previsionPersona() {
      return this.$store.state.previsionPersona;
    },
    regiones() {
      return this.$store.state.regiones
    },
    comuna() {
      return this.$store.state.comuna
    }
  },
  components: {
    ProgressBar
  },
  methods: {
    prevStep: function() {
      const prevNum = 1;
      this.$store.commit('SET_STEP_STJ', prevNum);
      this.$router.push({ path: `/tramites/5220/${prevNum}` });
    },
    async nextStep() {
      if (await this.guardar()) {
        const nextNum = 3;
        this.$store.commit('SET_STEP_STJ', nextNum);
        this.$router.push({ path: `/tramites/5220/${nextNum}` });
      }
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
      const year = date.getFullYear();
      const month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
      const day = date.getDate() + 1;

      return day + '-' + month + '-' + year;

    },
    async guardar() {
      const rutArray = this.datosPersona.rut.split('-');
      const empleadores = [];
      for (const empleador of this.datosEmpleadores) {
        const rutEmplArray = empleador.rut.split('-');
        empleadores.push({ 
                            runSE: Number(rutEmplArray[0]),
                            dvRunSE: rutEmplArray[1],
                            razonSocialSE: empleador.nombre,
                            emailSE: empleador.correo,
                            telefonoSE: empleador.telefono,
                            direccion: empleador.direccion
                          });
      }

      this.payload = {
        run: Number(rutArray[0]),
        dvRun: rutArray[1],
        nombre: this.datosPersona.nombres,
        app: this.datosPersona.apellidoPaterno,
        apm: this.datosPersona.apellidoMaterno,
        fechaNacimiento: this.datosPersona.fechaNac,
        telefono: this.datosPersona.telefono,
        email: this.datosPersona.correo,
        direccion: this.datosPersona.direccion,
        afp: Number(this.previsionPersona.afp.id),
        salud: Number(this.previsionPersona.salud.id),
        mutual: Number(this.previsionPersona.mutual.id),
        empleador: empleadores
      }
      console.log('payload', this.payload);
      this.$store.commit('SET_RESUMEN_SOLICITUD', {
                                                    estadoSolicitud: 1,
                                                    idSolicitud: 123456,
                                                    fechaIngreso: 1602633600,
                                                    fechaResolucion: 1606176000
                                                  });
      console.log('Resumen Solicitud', this.$store.state.resumenSolicitud);
      return true; //TODO: Eliminar esta linea al descomentar el procedimiento
      // TODO: Descomentar cuando este disponible el servicio y agregar la ruta al .env
      /*
      const url = this.$store.state.resumenSolicitud.codRes !== 5 ? process.env.API_STJ_GUARDAR_SOLICITUD : process.env.API_STJ_EDITAR_SOLICITUD;
      const metodo = this.$store.state.resumenSolicitud.codRes !== 5 ? 'POST' : 'PUT'
              
      await this.$axios({
          url: url,
          method: metodo,
          payload: this.payload
        })
          .then((response) => {
            if (response.status == "201") {
              if (response.data == "No token") {
                this.error_sesion();
                return false;
              } else {
                this.$store.commit('SET_RESUMEN_SOLICITUD', response.data);
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
                this.error_response('Error al guardar su solicitud');
              }
            }
            return false;
          });*/
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
  }
};
</script>
