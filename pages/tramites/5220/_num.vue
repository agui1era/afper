<template>
  <div class="container">
    <b-loading :is-full-page="true" :active.sync="loading" :can-cancel="false"></b-loading>
    <Step1T5220 v-if="step1" />
    <Step2T5220 v-if="step2" />
    <Step3T5220 v-if="step3" />
  </div>
</template>

<script>
import iConfig from "~/static/json/5220/Step1T5220.json";
import Step1T5220 from "../../../components/5220/Step1T5220";
import Step2T5220 from "../../../components/5220/Step2T5220.vue";
import Step3T5220 from "../../../components/5220/Step3T5220.vue";

export default {
  name: "UiKitFormStjStep",
  data() {
    return {
      iConfig: iConfig,
      loading: false,
      step1: false,
      step2: false,
      step3: false,
      // ambito: 0 // 0 = Ingresar solicitud - 1 = Modificar solicitud
    }
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
  middleware: 'auth',
  components: {
    Step1T5220,
    Step2T5220,
    Step3T5220
  },
  async created() {
    const rut = window.localStorage.getItem('userRut');

    /*const url = process.env.INF_CIUDADANO_BY_TOKEN;
  
    this.$axios({
      url: url,
      method: "POST"
    })
      .then((response) => {
        if (response.status == "200") {
          console.log('Response', response.data);
          console.log('¿Es válido?', rut === response.data.RolUnico.numero);
          // window.open(process.env.PASSPORT_LOGOUT);
          // this.$store.dispatch('logout');
        } else {
          console.log('NO ES 200');
        }
      })
      .catch((error) => {
        //window.ga('send', 'event', 'Error Ficha transaccional', 'trámite finalizado', 'ID - 70652');
        if (error.response) {
          console.log(error.response);
          this.loading = false;
          this.$router.push({ path: `/tramites/5220` });
        }
      });*/

    const param = parseInt(this.$route.params.num, 10);
    if (param === 0 && rut) {
        this.loading = true;
        const url = process.env.API_STJ_ELEGIBILIDAD;
  
        this.$axios({
          url: url + rut + '.json', // TODO: dejar solo 'url' cuando se integre con back
          method: "GET"
        })
          .then((response) => {
            this.rutConsultado = this.rut;
            this.loading = false;
            if (response.status == "200") {
              if (response.data == "No token") {
                this.error_sesion();
              } else {
                this.$store.commit('SET_RESUMEN_SOLICITUD', response.data);
                switch (response.data.codRes) {
                  case 1:
                    this.$store.commit('SET_STEP_STJ', 1);
                    this.$router.push({ path: `/tramites/5220/1` });
                    break;
                  case 5:
                    //this.ambito = 1;
                    this.$store.commit('SET_STEP_STJ', 1);
                    this.$router.push({ path: `/tramites/5220/1` });
                    break;
                  case 6:
                    this.$store.commit('SET_STEP_STJ', 3);
                    this.$router.push({ path: `/tramites/5220/3` });
                    break;
  
                  default:
                    this.$router.push({ path: `/tramites/5220` });
                    break;
                }
              }
            }
          })
          .catch((error) => {
            //window.ga('send', 'event', 'Error Ficha transaccional', 'trámite finalizado', 'ID - 70652');
            if (error.response) {
              console.log(error.response);
              this.loading = false;
  
              if (error.response.status == 404) {
                this.$router.push({ path: `/tramites/5220` });
              }
              if (error.response.status == 403) {
                this.error_sesion();
              }
              if (error.response.status == 500) {
                this.$router.push({ path: `/tramites/5220` });
              }
            }
          });
    } else if (param !== 0 && rut) {
      if (this.$store.state.stepStj !== param) {
        this.$router.push({ path: `/tramites/5220` });
      } else {
        this.step1 = param === 1;
        this.step2 = param === 2;
        this.step3 = param === 3;
      }
    } else {
      this.$router.push({ path: `/tramites/5220` });
    }
  },
  methods: {
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
  }
};
</script>
