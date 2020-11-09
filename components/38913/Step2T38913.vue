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
        <div class="cont-btn"><a class="link" @click="abrirDetPago()" > Ver </a></div>
                 
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
                     
                        <tr v-for="infoDetPago in infoPago" :key="infoDetPago.nro_documento" draggable="false">  
                        <!----> <!---->                        
                        <td data-label="N° Documento:" class=""> {{infoDetPago.nro_documento}}</td>
                        <td data-label="Fecha de Pago:" class=""> {{infoDetPago.fecha_pago}}</td>
                        <td data-label="Fecha vcnto. Pago:" class=""> {{infoDetPago.fecha_vencimiento}}</td>
                        <td data-label="Forma de Pago:" class=""> {{infoDetPago.forma_pago}} </td>
                        <td data-label="Lugar de Pago:" class=""> {{infoDetPago.lugar_pago}} </td>
                        <td data-label="Monto:" class=""> {{infoDetPago.monto}} </td>
                        <td data-label="Estado de Pago:" class=""> {{infoDetPago.estado_pago}} </td>
                        <td data-label="Ver Detalle:" class="">
                           <section>
                              <div class="form-cha">
                                 <section class="modal-form">
                                    <div class="cont-btn"><a class="link" @click="abrirDetPago()" > Ver </a></div>
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
                     <h3 class="modal-card-title text-black"> Detalle documento de pago n° <strong>{{detallePago.nro_documento}}</strong><br></h3>
                  </td>
                  <td></td>
               </tr>
            </table>
         </header>
         <section class="modal-card-body colorTableModal">
            <div class="cont-gr span-gr"><span>Beneficiario:</span><span><strong>{{detallePago.nombre_beneficiario}}</strong></span></div>
            <div class="cont-gr span-gr"><span>RUN:</span><span><strong>{{detallePago.rut_beneficiario}}-{{detallePago.dv_beneficiario}}</strong></span></div>
            <div class="cont-gr span-gr"><span>Tipo de beneficiario:</span><span><strong>{{detallePago.tipo_beneficiario}}</strong></span></div>
            <div class="cont-gr span-gr"><span>Fecha de pago:</span><span><strong>{{detallePago.fecha_pago}}</strong></span></div>
            <div class="cont-gr span-gr"><span>Vencimiento del beneficio:</span><span><strong>{{detallePago.fecha_vencimiento_beneficio}}</strong></span></div>
            <div class="cont-gr span-gr"><span>Número de documento:</span><span><strong>{{detallePago.nro_documento}}</strong></span></div>
            <div class="cont-gr span-gr"><span>Fecha de vencimiento del documento:</span><span><strong>{{detallePago.fecha_vencimiento_documento}}</strong></span></div>
            <div class="cont-gr span-gr"><span>Monto de pago:</span><span><strong>{{detallePago.monto_pago}}</strong></span></div>
            <div class="cont-gr span-gr"><span>Estado de pago:</span><span><strong>{{detallePago.estado_pago}}</strong></span></div>
            <div class="cont-gr span-gr"><span>Lugar de pago:</span><span><strong>{{detallePago.lugar_pago}}</strong></span></div>
            <div class="cont-gr span-gr"><span>Forma de pago:</span><span><strong>{{detallePago.forma_pago}}</strong></span></div>
            <hr>
            <div class="cont-gr span-gr">
               <h3> Cargas / causantes por las cuales se le para el Aporte o mienbros del grupo familiar </h3>
            </div>
            <div class="cont-gr span-gr"><span>RUN causante:</span><span><strong>{{detallePago.rut_causante}}-{{detallePago.dv_causante}}</strong></span></div>
            <div class="cont-gr span-gr"><span>Nombre causante:</span><span><strong>{{detallePago.nombre_causante}}</strong></span></div>
            <div class="cont-gr span-gr"><span>Fecha de reconocimiento:</span><span><strong>{{detallePago.fecha_reconocimiento}}</strong></span></div>
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
      infoPago: {},
      detallePago: {
         nombre_beneficiario:'',
         rut_beneficiario:'',
         dv_beneficiario:'',
         tipo_beneficiario:'',
         fecha_pago:'',
         fecha_vencimiento_beneficio:'',     
         nro_documento:0, 
         fecha_vencimiento_documento:'', 
         monto_pago:'',
         estado_pago:'',
         lugar_pago:'',
         forma_pago:'',
         
         nombre_causante:'',
         rut_causante:'',
         dv_causante:'',
         fecha_reconocimiento:''     
               
      }
                  
    }
  },
  methods: {

    abrirDetPago () {

      const url = process.env.API_AFPER_BENEFICIO;
      const nroDoc = '95798345';

         this.$axios({
            url: url + nroDoc,
            method: "GET"
         })
      .then((response) => {
        
          console.log(response.data.data );

          this.nombre_beneficiario=response.data.data.nombre_beneficiario;
          this.rut_beneficiario=response.data.data.rut_beneficiario;
          this.dv_beneficiario=response.data.data.dv_beneficiario;
          this.dv_beneficiario=response.data.data.dv_beneficiario;
          this.tipo_beneficiario=reponse.data.data.tipo_beneficiario;
          this.fecha_pago=response.data.data.fecha_pago;
          this.fecha_vencimiento_beneficio=response.data.data.fecha_vencimiento_beneficio
          this.nro_documento=response.data.data.nro_documento;
          this.fecha_vencimiento_documento=response.data.data.fecha_vencimiento_documento;
          this.monto_pago=response.data.data.monto_pago;
          this.estado_pago=response.data.data.estado_pago;
          this.lugar_pago=response.data.data.lugar_pago;
          this.forma_pago=response.data.data.forma_pago;

          this.nombre_causante=response.data.data.nombre_causante;
          this.rut_causante=response.data.data.rut_causante;
          this.dv_causante=response.data.data.dv_causante;
          this.fecha_reconocimiento=response.data.data.fecha_reconocimiento;

         }
         )
      .catch((error) => {
        console.log('Error al consultar detalle del pago');

        console.log(error.response);
        cerrarDetPago ()
      }
      );  

      this.IsModalDetPago = true
    },
    cerrarDetPago () {
      this.IsModalDetPago = false
    },
    volver() {
      this.$router.push({ path: `/tramites/38913/` });
    }
  },

  async created() {
    // const url = process.env.API_AFPER_DATAPAG;
    
    const url = process.env.API_AFPER_BENEFICIO;
          
        let rut=localStorage.getItem('rut');
        let fechaNac=localStorage.getItem('fechaNac');

          this.$axios({
            url: url + rut+'/'+fechaNac  ,
            method: "GET"
            })
            .then((response) => {
                this.infoPago = response.data.data.pagos;
                console.log(this.infoPago );
                              
            })
            .catch((error) => {
              
               console.log('Error al consultar lista de pagos');
               console.log(error.response);
            });
  },

  
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