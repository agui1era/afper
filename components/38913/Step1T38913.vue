<template>
  <!-- Ingreso del RUN -->
  <div class="container">
    <div class="container form-cha">
      <section>
        <header>
          <h4>{{this.config.proveedor_servicio}}
            <a href="#" class="link">{{this.config.nombre_proveedor_servicio}}</a>
          </h4>
          <h1>{{this.config.titulo}}</h1>
        </header>

        <!-- TELEMATICO NO CUMPLIMIENTO -->
        <section>
        <section id="respuesta">
            <table class="msg msg-alerta msg-2col">
              <tr>
                  <td><span class="msg-icono color-exito"><i class="fas fa-info-circle"></i></span></td>
                  <td>
                    <p> No se cumple segunda validación. (AFPER) </p>
                  </td>
              </tr>
            </table>
            <div class="field cont-btn">
              <button type="button" @click="volver()" class="button button btn-ref is-primary is-primary">
                  <!----> <span>Consultar otro RUN</span> <!---->
              </button>
            </div>
        </section>
        </section>
      

      </section>
    </div>
  </div>
</template>

<script>
import iConfig from "@/static/json/38913/index.json";

export default {
  name: "Step4",
  data() {
    return {
      config: iConfig
    }
  },
  methods: {
    validaBeneficio() {
      // Realizar segunda validacion del rut 
      console.log('Validar Rut si posee beneficio');
    },
    volver() {
      this.$router.push({ path: `/tramites/38913/` });
    }
  }
};
</script>
