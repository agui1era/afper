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
           <span v-html="mensajeBeneficio"></span>
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
                                    <div class="cont-btn"><a class="link" @click="abrirDetPago(infoDetPago.nro_documento)" > Ver </a></div>
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
            <div class="cont-gr span-gr"><span>RUN:</span><span><strong>{{formatRut(detallePago.rut_completo)}}</strong></span></div>
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
                 
                  <div v-for="detalleCausante in detalleCausantes" :key = "detalleCausante.rut_causante" >
                  <div class="cont-gr span-gr"><span>RUN causante:</span><span><strong>{{ formatRut(detalleCausante.rut_causante)}}</strong></span></div>
                  <div class="cont-gr span-gr"><span>Nombre causante:</span><span><strong>{{ detalleCausante.nombre_causante}}</strong></span></div>
                  <div class="cont-gr span-gr"><span>Fecha de reconocimiento:</span><span><strong>{{ detalleCausante.fecha_reconocimiento}}</strong></span></div>
                  </div>
           
         </section>
         <footer class="modal-card-foot">
            <button type="button" @click="enviarImprimir()" class="button is-primary">
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
      mensajeBeneficio:'',
      detalleCausantes:'',
      infoPago: {},     
      detallePago: {
         nombre_beneficiario:'',
         rut_beneficiario:'',
         dv_beneficiario:'',
         rut_completo:'',
         tipo_beneficiario:'',
         fecha_pago:'',
         fecha_vencimiento_beneficio:'',     
         nro_documento:'', 
         fecha_vencimiento_documento:'', 
         monto_pago:'',
         estado_pago:'',
         lugar_pago:'',
         forma_pago:'',
         
      }
                  
    }
  },
  methods: {

    FormatRut(rut) {
      let clearRut = typeof rut === 'string' ? rut.replace(/[^0-9kK]+/g, '').toUpperCase() : '';

      let result = clearRut.slice(-4, -1) + '-' + clearRut.substr(clearRut.length - 1)
      for (let i = 4; i < clearRut.length; i += 3) {
          result = clearRut.slice(-3 - i, -i) + '.' + result
      }
      return result;
    },

    abrirDetPago (nroDoc) {

      const url = process.env.API_AFPER_BENEFICIO;
      
      console.log("Consultar detalle de pago: "+url+nroDoc)

         this.$axios({
            url: url + nroDoc,
            method: "GET"
         })
      .then((response) => {
        
          console.log(response.data.data );

          this.detallePago.nombre_beneficiario=response.data.data.nombre_beneficiario;
          this.detallePago.rut_completo= response.data.data.rut_beneficiario + response.data.data.dv_beneficiario;
          this.detallePago.tipo_beneficiario=response.data.data.tipo_beneficiario;
          this.detallePago.fecha_pago=response.data.data.fecha_pago;
          //this.detallePago.fecha_vencimiento_beneficio=response.data.data.fecha_vencimiento_beneficio
          this.detallePago.nro_documento=response.data.data.nro_documento;
          //this.detallePago.fecha_vencimiento_documento=response.data.data.fecha_vencimiento_documento;
          this.detallePago.monto_pago=response.data.data.monto_pago;
          //this.detallePago.estado_pago=response.data.data.estado_pago;
          //this.detallePago.lugar_pago=response.data.data.lugar_pago;
          //this.detallePago.forma_pago=response.data.data.forma_pago;

          this.detalleCausantes=response.data.data.causantes;

          console.log(this.detalleCausantes );
         }
         )
      .catch((error) => {
        
        console.log('Error al consultar detalle del pago');
        console.log(error.response);
        this.cerrarDetPago ()
      }
      );  

      this.IsModalDetPago = true
    },
    cerrarDetPago () {
      
      this.IsModalDetPago = false
    },
    volver() {
     
     this.$router.push({ path: `/tramites/38913/` });
    },
    enviarImprimir(){     
      
      window.print();

    }
  },
  async created() {
    // const url = process.env.API_AFPER_DATAPAG;
    
    const url = process.env.API_AFPER_BENEFICIO;
          
        let rut=localStorage.getItem('rut');
        let fechaNac=localStorage.getItem('fechaNac');

        this.mensajeBeneficio=localStorage.getItem('mensajeBeneficio');
        console.log('Mensaje beneficiario: '+this.mensajeBeneficio)

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