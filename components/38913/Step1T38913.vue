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
          <table class="msg-2col">
            <tr>
              <td>
                <p>
                  NO CUMPLE SEGUNDA VALIDACION. (AFPER)
                </p>
              </td>
            </tr>
          </table>
          <!-- Footer del Formulario -->
          <div class="field cont-btn">
            <b-button type="is-light" @click="volver()">Volver</b-button>
          </div>
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
