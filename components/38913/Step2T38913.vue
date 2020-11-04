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
        <div class="cont-gr">
          <p> Este año, usted es beneficiario del Aporte Familiar Permanente y recibirá <strong>$43.042 (cuarentaytres mil, cuarenta y dos pesos)</strong>, por cada causante de subsidio o carga familiar debidamente acreditada al 31 de Diciember de 2020. </p>
        </div>
        <div class="cont-gr">
          <p> Su pago total es de <strong>$43.042</strong> pesos, el que podrá cobrar presentando su cédula de identidad, a partir del 01.03.2021, en el local de la Caja de Compensación Los Héroes contratado por el IPS, en la comuna de Santiago. </p>
        </div>
        <div class="cont-gr">
          <p> El derecho al cobro del beneficiario vence impostergadamente a los nueve meses desde la fecha de emisión de pago. </p>
        </div>
        <section>

                 
     <div class="b-tabs tabla-tabs">
   <nav class="tabs">
      <ul>
         <li class="is-active">
            <a>
               <!----> <span>Table</span>
            </a>
         </li>
         <li class="">
            <a>
               <!----> <span>Selected</span>
            </a>
         </li>
      </ul>
   </nav>
   <section class="tab-content">
      <div class="tab-item" style="">
         <div class="b-table">
            <!----> <!----> 
            <div class="table-wrapper has-mobile-cards">
               <table tabindex="0" class="table is-hoverable">
                  <thead>
                     <tr>
                        <!----> <!----> 
                        <th class="">
                           <div class="th-wrap">
                              N° Documento: <!---->
                           </div>
                        </th>
                        <th class="">
                           <div class="th-wrap">
                              Fecha de Pago: <!---->
                           </div>
                        </th>
                        <th class="">
                           <div class="th-wrap">
                              Fecha vcnto. Pago: <!---->
                           </div>
                        </th>
                        <th class="">
                           <div class="th-wrap">
                              Forma de Pago: <!---->
                           </div>
                        </th>
                        <th class="">
                           <div class="th-wrap">
                              Lugar de Pago: <!---->
                           </div>
                        </th>
                        <th class="">
                           <div class="th-wrap">
                              Monto: <!---->
                           </div>
                        </th>
                        <th class="">
                           <div class="th-wrap">
                              Estado de Pago: <!---->
                           </div>
                        </th>
                        <th class="">
                           <div class="th-wrap">
                              Ver Detalle: <!---->
                           </div>
                        </th>
                        <!---->
                     </tr>
                     <!----> <!---->
                  </thead>
                  <tbody>
                     <tr draggable="false" class="">
                        <!----> <!----> 
                        <td data-label="N° Documento:" class=""> 12345678 </td>
                        <td data-label="Fecha de Pago:" class=""> 15-10-2020 </td>
                        <td data-label="Fecha vcnto. Pago:" class=""> 15-10-2020 </td>
                        <td data-label="Forma de Pago:" class=""> Cuenta Rut </td>
                        <td data-label="Lugar de Pago:" class=""> Banco Estado </td>
                        <td data-label="Monto:" class=""> 41580 </td>
                        <td data-label="Estado de Pago:" class=""> PAGADO </td>
                        <td data-label="Ver Detalle:" class="">
                           <section>
                              <div class="form-cha">
                                 <section class="modal-form">
                                    <div class="cont-btn"><a class="link"@click="IsModalDetPago = true" > Ver </a></div>
                                    <!---->
                                 </section>
                              </div>
                           </section>
                        </td>
                        <!---->
                     </tr>
                     <!----> <!---->
                     <tr draggable="false" class="is-selected">
                        <!----> <!----> 
                        <td data-label="N° Documento:" class=""> 87654321 </td>
                        <td data-label="Fecha de Pago:" class=""> 15-11-2020 </td>
                        <td data-label="Fecha vcnto. Pago:" class=""> 15-12-2020 </td>
                        <td data-label="Forma de Pago:" class=""> Depósito </td>
                        <td data-label="Lugar de Pago:" class=""> Banco Falabella </td>
                        <td data-label="Monto:" class=""> 50000 </td>
                        <td data-label="Estado de Pago:" class=""> CADUCADO </td>
                        <td data-label="Ver Detalle:" class="">
                           <section>
                              <div class="form-cha">
                                 <section class="modal-form">
                                    <div class="cont-btn"><a class="link" @click="IsModalDetPago = true" > Ver </a></div>
                                    <!---->
                                 </section>
                              </div>
                           </section>
                        </td>
                        <!---->
                     </tr>
                     <!----> <!---->
                     <tr draggable="false" class="">
                        <!----> <!----> 
                        <td data-label="N° Documento:" class=""> 56800149 </td>
                        <td data-label="Fecha de Pago:" class=""> 01-12-2020 </td>
                        <td data-label="Fecha vcnto. Pago:" class=""> 01-01-2021 </td>
                        <td data-label="Forma de Pago:" class=""> Vale Vista </td>
                        <td data-label="Lugar de Pago:" class=""> Sucursal Bancaria </td>
                        <td data-label="Monto:" class=""> 38990 </td>
                        <td data-label="Estado de Pago:" class=""> EN TRÁMITE </td>
                        <td data-label="Ver Detalle:" class="">
                           <section>
                              <div class="form-cha">
                                 <section class="modal-form">
                                    <div class="cont-btn"><a class="link" @click="IsModalDetPago = true" > Ver </a></div>
                                    <!---->
                                 </section>
                              </div>
                           </section>
                        </td>
                        <!---->
                     </tr>
                     <!----> <!---->
                  </tbody>
                  <!---->
               </table>
            </div>
            <!---->
         </div>
      </div>
      
   </section>
</div>


          
          <!-- MODAL DETALLE DE PAGO -->
          <b-modal :active.sync="IsModalDetPago" scroll="keep">
            <form action="" class="form-cha">
              <div class="modal-card" style="width: auto;">
                  <header class="modal-card-head columns">
                    <table class="modal-header-table">
                        <tr class="tr-btn">
                          <td>
                              <h3 class="modal-card-title text-black"> Detalle documento de pago n° <strong>243242342</strong><br></h3>
                          </td>
                          <td></td>
                        </tr>
                    </table>
                  </header>
                  <section class="modal-card-body colorTableModal">
                    <div class="cont-gr span-gr"><span>Beneficiario:</span><span><strong>María Isabel Monsalve Gonzalez</strong></span></div>
                    <div class="cont-gr span-gr"><span>RUN:</span><span><strong>4.444.444-4</strong></span></div>
                    <div class="cont-gr span-gr"><span>Tipo de beneficiario:</span><span><strong>TUTOR (SUF)</strong></span></div>
                    <div class="cont-gr span-gr"><span>Fecha de pago:</span><span><strong>23-03-2020</strong></span></div>
                    <div class="cont-gr span-gr"><span>Vencimiento del beneficio:</span><span><strong>23-12-2020</strong></span></div>
                    <div class="cont-gr span-gr"><span>Número de documento:</span><span><strong>75974353</strong></span></div>
                    <div class="cont-gr span-gr"><span>Fecha de vencimiento del documento:</span><span><strong>31-05-2020</strong></span></div>
                    <div class="cont-gr span-gr"><span>Monto de pago:</span><span><strong>47.765</strong></span></div>
                    <div class="cont-gr span-gr"><span>Estado de pago:</span><span><strong>PAGADO</strong></span></div>
                    <div class="cont-gr span-gr"><span>Lugar de pago:</span><span><strong>CCAF Los Héroes</strong></span></div>
                    <div class="cont-gr span-gr"><span>Forma de pago:</span><span><strong>PRESENCIAL PERMANENTE</strong></span></div>
                    <hr>
                    <div class="cont-gr span-gr">
                        <h3> Cargas / causantes por las cuales se le para el Aporte o mienbros del grupo familiar </h3>
                    </div>
                    <div class="cont-gr span-gr"><span>RUN causante:</span><span><strong>20.XXX.112-3</strong></span></div>
                    <div class="cont-gr span-gr"><span>Nombre causante:</span><span><strong>JESÚS ISAÍAS ****** ******</strong></span></div>
                    <div class="cont-gr span-gr"><span>Fecha de reconocimiento:</span><span><strong>01-06-2014</strong></span></div>
                  </section>
                  <footer class="modal-card-foot">
                    <button type="button" class="button is-primary">
                        <!----> <span>Inprimir</span> <!---->
                    </button>
                    <button type="button" @click="cerrarDetPago()" class="button is-default">
                        <!----> <span>Volver a respuesta</span> <!---->
                    </button>
                  </footer>
              </div>
            </form>
          </b-modal>
        </section>
        <br>
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