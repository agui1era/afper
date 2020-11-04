<template>
  <!-- Ingreso del RUN -->
  <div id="app" class="container">
    <div class="container form-cha">
      <section>
        <header>
          <h4>{{this.config.proveedor_servicio}}
            <a href="#" class="link">{{this.config.nombre_proveedor_servicio}}</a>
          </h4>
          <h1>{{this.config.titulo}}</h1>
        </header>
        <div class="cont-gr span-gr">
          <span>Este año, usted es beneficiario del Aporte Familiar Permanente y recibirá <strong>$43.042 (cuarenta y tres mil, cuarenta y dos pesos)</strong>, por cada causante de subsidio o carga familiar debidamente acreditda al 31 de diciembre de 2020.</span>
          <br>
          <span>Su pago total es de <strong>$43.042</strong> pesos, el que podrá cobrar prsentando su cédula de identidad, a partir del 01-03-2021, en el local de la Caja de Compensación Los Héroes contratado por el IPS, en la comuna de Santiago.</span>
          <br>
          <span>El derecho al cobro del beneficio vence impostergablemente a los nueve meses desde la fecha de emisión del pago.</span>
        </div>
        <section>
          <table 
            class="table is-fullwidth is-bordered"
            style="width: auto"
          >
            <thead class="is-info">
              <tr>
                <th class="text-left">N° Documento</th>
                <th class="text-left">Fecha de Pago</th>
                <th class="text-left">Fecha vcto. beneficio</th>
                <th class="text-left">Forma de Pago</th>
                <th class="text-left">Lugar de Pago</th>
                <th class="text-left">Monto</th>
                <th class="text-left">Estado de Pago</th>
                <th class="text-left">Ver Detalle</th>
              </tr>
            </thead>
            <tbody class="is-font">
              <tr v-for="(datos, cAfper) in detalle.detalleAfper" :key="cAfper">
                <td>{{ datos.nDocAfper }}</td>
                <td>{{ datos.fecPagoAfper }}</td>
                <td>{{ datos.fecVctoAfper }}</td>
                <td>{{ datos.formaPagoAfper }}</td>
                <td>{{ datos.lugarPagoAfper }}</td>
                <td>{{ datos.mtoPagoafper }}</td>
                <td>{{ datos.estPagoafper }}</td>
                <td>
                  <h5>
                  <a class="link" @click="IsModalDetPago = true" href="#" title:>VER DETALLE</a><span class="icon color-link"><i class="oi oi-arrow-right"></i></span></h5>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- MODAL DETALLE DE PAGO -->
          <b-modal :active.sync="IsModalDetPago" scroll="keep">
            <form action="" class="form-cha">
              <div class="modal-card" style="width: auto">
                <header class="modal-card-head columns">
                  <table class="modal-header-table">
                    <tr class="tr-btn">
                      <td>
                        <h3 class="modal-card-title">DETALLE DE PAGO N° <strong>1082151</strong></h3>
                      </td>
                      <td></td>
                    </tr>
                  </table>   
                </header>
                <section class="modal-card-body">
                  <div class="columns detalle">
                    <div class="column texto">BENEFICIARIO</div>
                    <div class="column textoData">ELIAS EDUARDO ROJAS VARGAS</div>
                    <div class="column texto">TIPO DE BENEFICIARIO</div>
                    <div class="column textoData">PENSIONADO</div>
                    <div class="column texto">N° DOCUMENTO</div>
                    <div class="column textoData">1082151</div>
                  </div>
                  <div class="columns detalle">
                    <div class="column texto">RUT</div>
                    <div class="column textoData">128059268</div>
                    <div class="column texto">FECHA DE PAGO</div>
                    <div class="column textoData">01-01-2021</div>
                    <div class="column texto">FECHA VCTO. DOC.</div>
                    <div class="column textoData">01-02-2021</div>
                  </div>
                  <div class="columns detalle">
                    <div class="column texto"></div>
                    <div class="column textoData"></div>
                    <div class="column texto">VENC. DEL BENEFICIO</div>
                    <div class="column textoData">12-10-2021</div>
                    <div class="column texto">MONTO DEL PAGO</div>
                    <div class="column textoData">41.567</div>
                  </div>
                  <section>
                    <h4>Cargas por las cuales se paga el Aporte</h4>
                    <table class="table is-fullwidth is-bordered detalle">
                      <tr>
                        <td style="width: 160px">RUN Causante</td>
                        <td>7.XXX.724-X</td>
                      </tr>
                      <tr>
                        <td style="width: 160px">Nombre Causante</td>
                        <td>PATRICIA BUSTAMANTE NAIL</td>
                      </tr>
                      <tr>
                        <td style="width: 160px">Fecha de Reconocimiento</td>
                        <td>07-01-2013</td>
                      </tr>
                    </table>
                  </section>
                </section>
                <footer class="modal-card-foot">
                  <b-button type="is-default" @click="cerrarDetPago()">Cancelar</b-button>
                </footer>
              </div>
            </form>
          </b-modal>
        </section>
        <br>
        <!-- Footer del Formulario -->
        <div class="field cont-btn">
          <b-button type="is-light" @click="volver()">Volver</b-button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import iConfig from "@/static/json/38913/index.json";
import dataAfper from "@/static/mocks/38913/obtenerAfper.json";

export default {
  // name: "Step4",
  data() {
    return {
      config: iConfig,
      IsModalDetPago: false,
      //
      detalle: dataAfper,
      infoDetPago: {
                    infoBeneficiario: '',
                    infoRut: 0,
                    infoTipoBenef: '',
                    infoFechaPago: '',
                    infoVctoBeneficio: '',
                    infoNroDcto: 0,
                    infoFecVctoDoc: '',
                    infoMtoPago: 0
                  }
    }
  },
  methods: {
    cerrarDetPago () {
      this.IsModalDetPago = false
    },
    volver() {
      this.$router.push({ path: `/tramites/38913/` });
    }
  },
  // mounted: function() {
  //   this.getDetPagos();
  //   console.log(this.infoDetPago);
  // },
  async created() {
    // const url = process.env.API_AFPER_DATAPAG;
    
    const url = process.env.API_AFPER_DATAPAG;
    const rut = '22222222';

    this.$axios({
      url: url + rut + '.json',
      method: "GET"
    })
      .then((response) => {
          this.infoDetPago = response.data;
          console.log(this.infoDetPago);
      })
      .catch((error) => {
        console.log('dio error');
        console.log(error.response);
      }
      );

    console.log(this.infoDetPago);
  }

};
</script>

<style>
    thead.is-info {
        background: rgb(91, 91, 245);
        color: white;
        font-size: 9px;
    }
    
    td.is-info {
        background: rgb(35, 35, 243);
        color: white;
        font-size: 12px;
    }

    tbody.is-font {
      font-size: 12px;
    }

    .detalle {
      font-size: 12px;
    }

    .texto {
      background: rgb(76, 96, 119);
      color: white;
      text-align: right;
    }

    .textoData {
      background: rgb(173, 174, 175);
      color: rgb(61, 60, 60);
    }
</style>