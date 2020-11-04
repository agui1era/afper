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
            >{{iConfig.nombre_proveedor_servicio}}</a
          >
        </h4>
        <h1>{{iConfig.titulo}}</h1>
        <Progress-bar :steps="3" :active="3" v-if="this.resumenSolicitud.estadoSolicitud !== 3 && this.resumenSolicitud.estadoSolicitud !== 9" />
      </header>

      <section id="respuesta">
        <header>
          <h2>{{iConfig.subtitulo_h2}}</h2>
        </header>
        <table class="msg msg-info msg-2col">
          <tr>
            <td>
              <span class="msg-icono color-alerta"
                ><i class="fas fa-info-circle"></i
              ></span>
            </td>

            <td>
              <p>
                {{iConfig.p}}
                <strong>{{iConfig.strong}}.</strong>
              </p>
            </td>
          </tr>
        </table>

        <div class="contenido-form">
          <div class="cont-gr span-gr">
            <span> Número de solicitud</span>
            <span><strong>{{resumenSolicitud.idSolicitud}}</strong></span>
          </div>

          <div class="cont-gr span-gr">
            <span> Fecha de ingreso</span>
            <span><strong>{{formatFecha(resumenSolicitud.fechaIngreso)}}</strong></span>
          </div>

          <div class="cont-gr span-gr">
            <span> Tipo de solicitud</span>
            <span
              ><strong>{{iConfig.tipo_solicitud}}</strong></span
            >
          </div>

          <div class="cont-gr span-gr">
            <span> Estado actual</span>
            <span><strong>{{estadoSolicitud}}</strong></span>
          </div>

          <div class="cont-gr span-gr">
            <span> Fecha de resolución</span>
            <span><strong>{{formatFecha(resumenSolicitud.fechaResolucion)}}</strong></span>
          </div>

          <div class="cont-gr span-gr">
            <span> Archivo digital</span>
            <span
              ><strong
                ><a class="link" title="Descargar PDF" @click="descargarPdf(resumenSolicitud.idSolicitud)"
                  >DescargarPDF</a
                ></strong
              ></span
            >
          </div>
        </div>
        <br />
        <div class="field cont-btn">
          <b-button type="is-primary"
          v-if="this.resumenSolicitud.estadoSolicitud === 3"
            >Ver cartola</b-button
          >
          <b-button type="is-default" @click="irFicha()">Volver a la ficha</b-button>
        </div>
      </section>
    </div>
  </section>
</template>
<script>
import ProgressBar from "../ProgressBar.vue";
import iConfig from "~/static/json/5220/Step3T5220.json";

export default {
  name: "StepThree",
  data() {
    return {
      iConfig: iConfig
    }
  },
  components: {
    ProgressBar
  },
  computed: {
    resumenSolicitud() {
      return this.$store.state.resumenSolicitud;
    },
    estadoSolicitud() {
      return this.resumenSolicitud.estadoSolicitud === 3 ? this.iConfig.estado_solicitud_3 :
             this.resumenSolicitud.estadoSolicitud === 9 ? this.iConfig.estado_solicitud_9 :
             this.iConfig.estado_solicitud_1y2;
    }
  },
  methods: {
    formatFecha(timestamp) {

      const date = new Date(timestamp * 1000);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
      const day = date.getDate() + 1;

      return day + '-' + month + '-' + year;

    },
    async descargarPdf(idSolicitud) {
      const url = process.env.API_STJ_DESCARGAR_RESUMEN_SOLICITUD;
  
      await this.$axios({
        url: url + idSolicitud + '.json', //  TODO: dejar solo 'url' mas idSolicitud cuando se integre con back
        method: "GET",
      })
        .then((response) => {
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
            console.log(error.response);
  
            if (error.response.status == 403) {
                this.error_sesion();
              } else {
                this.error_response('Error al cargar datos de la persona');
              }
          }
        });
    },
    irFicha() {
      window.location = this.iConfig.url_ficha;
    }
  }
};
</script>
