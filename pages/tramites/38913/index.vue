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

        <section id="respuesta" v-if="showRut">
          <div class="container form-cha">
            <!-- INGRESO DE RUT -->
            <div class="form-sector">
              <b-field 
                :label="this.config.lbl_txt_rut"
                :type="{ 'is-danger': errors.has('rut') }"
                :message="{ 'Ingrese un RUT válido': errors.has('rut') }"
              >
                <b-input placeholder="Ejemplo: 11.111.111-1" 
                        v-model="rut"
                        type="text"
                        maxlength="12"
                        id="rut"
                        name="rut" 
                        v-validate="'rut'"
                        :keyup="formatRut()"
                ></b-input>
              </b-field>
            

            <!-- INGRESO FECHA DE NACIMIENTO -->
            <div class="field">
                <b-field label="Fecha de nacimiento *">                                    
                    <div class="columns">
                        <div class="column ">
                            <b-select placeholder="Día" v-model="diaNac">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                              <option value="13">13</option>
                              <option value="14">14</option>
                              <option value="15">15</option>
                              <option value="16">16</option>
                              <option value="17">17</option>
                              <option value="18">18</option>
                              <option value="19">19</option>
                              <option value="20">20</option>
                              <option value="21">21</option>
                              <option value="22">22</option>
                              <option value="23">23</option>
                              <option value="24">24</option>
                              <option value="25">25</option>
                              <option value="26">26</option>
                              <option value="27">27</option>
                              <option value="28">28</option>
                              <option value="29">29</option>
                              <option value="30">30</option>
                              <option value="31">31</option>
                            </b-select>
                        </div>
                        <div class="column">
                            <b-select placeholder="Mes" v-model="mesNac">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                            </b-select>
                        </div>
                        <div class="column ">
                            <b-select placeholder="Año" v-model="annoNac">
                              <option value="2020">2020</option> 
                              <option value="2019">2019</option> 
                              <option value="2018">2018</option> 
                              <option value="2017">2017</option> 
                              <option value="2016">2016</option> 
                              <option value="2015">2015</option> 
                              <option value="2014">2014</option> 
                              <option value="2013">2013</option> 
                              <option value="2012">2012</option> 
                              <option value="2011">2011</option> 
                              <option value="2010">2010</option> 
                              <option value="2009">2009</option>
                              <option value="2008">2008</option>
                              <option value="2007">2007</option>
                              <option value="2006">2006</option>
                              <option value="2005">2005</option>
                              <option value="2004">2004</option>
                              <option value="2003">2003</option>
                              <option value="2002">2002</option>
                              <option value="2001">2001</option>
                              <option value="2000">2000</option>
                              <option value="1999">1999</option>
                              <option value="1998">1998</option>
                              <option value="1997">1997</option>
                              <option value="1996">1996</option>
                              <option value="1995">1995</option>
                              <option value="1994">1994</option>
                              <option value="1993">1993</option>
                              <option value="1992">1992</option>
                              <option value="1991">1991</option>
                              <option value="1990">1990</option>
                              <option value="1989">1989</option>
                              <option value="1988">1988</option>
                              <option value="1987">1987</option>
                              <option value="1986">1986</option>
                              <option value="1985">1985</option>
                              <option value="1984">1984</option>
                              <option value="1983">1983</option>
                              <option value="1982">1982</option>
                              <option value="1981">1981</option>
                              <option value="1980">1980</option>
                              <option value="1979">1979</option>
                              <option value="1978">1978</option>
                              <option value="1977">1977</option>
                              <option value="1976">1976</option>
                              <option value="1975">1975</option>
                              <option value="1974">1974</option>
                              <option value="1973">1973</option>
                              <option value="1972">1972</option>
                              <option value="1971">1971</option>
                              <option value="1970">1970</option>
                              <option value="1969">1969</option>
                              <option value="1968">1968</option>
                              <option value="1967">1967</option>
                              <option value="1966">1966</option>
                              <option value="1965">1965</option>
                              <option value="1964">1964</option>
                              <option value="1963">1963</option>
                              <option value="1962">1962</option>
                              <option value="1961">1961</option>
                              <option value="1960">1960</option>
                              <option value="1959">1959</option>
                              <option value="1958">1958</option>
                              <option value="1957">1957</option>
                              <option value="1956">1956</option>
                              <option value="1955">1955</option>
                              <option value="1954">1954</option>
                              <option value="1953">1953</option>
                              <option value="1952">1952</option>
                              <option value="1951">1951</option>
                              <option value="1950">1950</option>
                              <option value="1949">1949</option>
                              <option value="1948">1948</option>
                              <option value="1947">1947</option>
                              <option value="1946">1946</option>
                              <option value="1945">1945</option>
                              <option value="1944">1944</option>
                              <option value="1943">1943</option>
                              <option value="1942">1942</option>
                              <option value="1941">1941</option>
                              <option value="1940">1940</option>
                              <option value="1939">1939</option>
                              <option value="1938">1938</option>
                              <option value="1937">1937</option>
                              <option value="1936">1936</option>
                              <option value="1935">1935</option>
                              <option value="1934">1934</option>
                              <option value="1933">1933</option>
                              <option value="1932">1932</option>
                              <option value="1931">1931</option>
                              <option value="1930">1930</option>
                          </b-select>
                        </div>
                    </div>
                </b-field>              
               </div>
            </div>
            <div class="cont-req">
              <span>Los campos marcados con * son obligatorios</span>
            </div>
            
            <div class="cont-gr">
              <div class="field cont-btn">
                <b-button class="btn btn-primary" @click.prevent="makeRequest()"
                :disabled="errors.has('rut') || disabled || (rut.length == 0)">Consultar</b-button>
              </div>
            </div>
          </div>
        </section>

      </section>
    </div>
  </div>
</template>

<script>
import iConfig from '@/static/json/38913/index.json';
import ProgressBar from "@/components/ProgressBar.vue";
import axios from "axios";
// import moment from 'moment';

import Vue from "vue";
import VeeValidate, { Validator } from "vee-validate";
import { rutValidator, rutFilter, rutInputDirective } from "vue-dni";

Vue.use(VeeValidate);
Vue.filter("rutFilter", rutFilter);
Vue.directive("rut", rutInputDirective);

export default {
  name: 'HomePage',

  
  data() {
    return {
      config: iConfig,
      rut: '',
      fechaHoy: new Date(),
      showRut: true,
      diaNac: null,
      mesNac: null,
      annoNac: null,
      codResponse:0,
      mensajeBeneficio:''
    };
  },

  //middleware: 'auth',
  components: { 
    ProgressBar 
  },
  methods: {
    
    makeRequest() {
      this.reset();
   
      const url = process.env.API_AFPER_BENEFICIO;
      
        let arrRut = this.rut.split("-"); 
        let rut =arrRut[0]
        let dv  =arrRut[1]
        rut=rut.replaceAll('.',"")
    
        localStorage.setItem('rut', rut);
        localStorage.setItem('dv', dv);
        

        if(parseInt(this.mesNac) < 10)
          {this.mesNac="0"+this.mesNac};
        if(parseInt(this.diaNac) < 10)
          {this.diaNac="0"+this.diaNac};


        let fechaNac=this.annoNac+this.mesNac+this.diaNac
        console.log("Fecha de nacimiento: "+fechaNac);
        localStorage.setItem('fechaNac', fechaNac);

        console.log(url + rut+'/'+fechaNac  )

          this.$axios({
            url: url + rut+'/'+fechaNac  ,
            method: "GET"
            })
            .then((response) => {
                this.codResponse = response.status;
                this.mensajeBeneficio=response.data.data.mensajeBeneficio;
                localStorage.setItem('mensajeBeneficio', this.mensajeBeneficio);

                console.log("Cod de respuesta: "+this.codResponse);
                
                if (this.codResponse == 200) 
                {
                    this.$router.push({path: `/tramites/38913/2`})
                }
                else
                {
                  this.$router.push({path: `/tramites/38913/4`})
        }
            })
            .catch((error) => {
              
              console.log('Error en consulta de beneficio');
              console.log(error.response);
              this.$router.push({path: `/tramites/38913/4`})
              
            }
            );
    },
    reset() {
      this.showRut = false
    },
    ingresoClaveUnica(param) {
      this.$router.push({ path: `claveunica/` + param });
    },
    formatRut() {
        
    let clearRut = typeof this.rut === 'string' ? this.rut.replace(/[^0-9kK]+/g, '').toUpperCase() : '';
    if (clearRut.length <= 1) {
        return false
    }
    var result = clearRut.slice(-4, -1) + '-' + clearRut.substr(clearRut.length - 1)
    for (var i = 4; i < clearRut.length; i += 3) {
        result = clearRut.slice(-3 - i, -i) + '.' + result
    }
    this.rut = result
    let rut = this.rut
    if (typeof rut !== 'string') {
        return false
    }
    rut = typeof this.rut === 'string' ? this.rut.replace(/[^0-9kK]+/g, '').toUpperCase() : ''
    var rutDigits = parseInt(rut.slice(0, -1), 10)
    var m = 0
    var s = 1
    while (rutDigits > 0) {
        s = (s + rutDigits % 10 * (9 - m++ % 6)) % 11
        rutDigits = Math.floor(rutDigits / 10)
    }
    var checkDigit = (s > 0) ? String((s - 1)) : 'K'
    if (checkDigit === rut.slice(-1)) {
        this.errores = false;
    } else {
        this.errores = true;
    }
  }
  },
   created() {
     Validator.extend("rut", rutValidator);
  }
};
</script>