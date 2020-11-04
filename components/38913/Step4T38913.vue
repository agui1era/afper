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
          
          <table class="msg msg-info msg-2col"><tr><td><span class="msg-icono color-exito"><i class="fas fa-exclamation-triangle"></i></span></td><td><p> A la fecha, el RUN ingresado no figura en nuestros registros. Para una orientación más detallada puede llamar a nuestro Call Center <a href="#" class="link"> 600 4400040 </a></p></td></tr></table>

          <div class="field cont-btn">
            <b-button type="button" @click="volver()" class="button button btn-ref is-primary is-primary"> <!----> <span>Consultar otro RUN</span> <!----></b-button>
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
    volver() {
      this.$router.push({ path: `/tramites/38913/` });
    }
  }
};
</script>
