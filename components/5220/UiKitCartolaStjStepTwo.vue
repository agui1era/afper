<template>
  <section>
    <!-- PASO 1 -->
    <div class="container form-cha">
      <header>
        <h4>
          Servicio de información entregado por
          <a
            class="link"
            href="https://www.chileatiende.gob.cl/instituciones/AL005"
            title="Institución asociada"
            >Instituto de Previsión Social</a
          >
        </h4>
        <h1>Cartola STJ</h1>
      </header>
      <section>
        <table class="msg msg-info msg-2col ">
          <tr>
            <td>
              <span class="msg-icono color-alerta"
                ><i class="fas fa-info-circle"></i
              ></span>
            </td>
            <td>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </td>
          </tr>
        </table>

        <!-- <div class="form-sector">
              <b-field label="Ingresa el RUT del beneficiario*">
                <b-input value="22.222.222-2"></b-input>
              </b-field>
        </div> -->
        <!-- <header>
          <h2>Empleador para el cual presta servicios</h2>
        </header> -->
        <div class="cont-gr">
          <label class="label" for="">Seleccione un año*</label>
          <b-field grouped>
            <b-select placeholder="Año" expanded>
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
          </b-field>
        </div>
        <div class="card-for-modal">
          <div class="cont-gr span-gr">
            <span>AFP: </span>
            <span><strong>MODELO</strong></span>
          </div>
          <div class="cont-gr span-gr">
            <span>Rut empleador: </span>
            <span><strong>22.222.222-5</strong></span>
          </div>
          <div class="cont-gr span-gr">
            <span>Monto: </span>
            <span><strong>$ 0</strong></span>
          </div>
          <div class="cont-gr span-gr">
            <span>Periodo remuneración: </span>
            <span><strong>2019-2020</strong></span>
          </div>
          <div class="cont-gr span-gr">
            <span>Observaciones: </span>
            <span
              ><strong
                >Se suspende el pago. NO SE ACREDITÓ PAGO MUTUAL</strong
              ></span
            >
          </div>
        </div>
        <div class="card-for-modal">
          <div class="cont-gr span-gr">
            <span>AFP: </span>
            <span><strong>MODELO</strong></span>
          </div>
          <div class="cont-gr span-gr">
            <span>Rut empleador: </span>
            <span><strong>22.222.222-5</strong></span>
          </div>
          <div class="cont-gr span-gr">
            <span>Monto: </span>
            <span><strong>$ 0</strong></span>
          </div>
          <div class="cont-gr span-gr">
            <span>Periodo remuneración: </span>
            <span><strong>2019-2020</strong></span>
          </div>
          <div class="cont-gr span-gr">
            <span>Observaciones: </span>
            <span
              ><strong
                >Se suspende el pago. NO SE ACREDITÓ PAGO MUTUAL</strong
              ></span
            >
          </div>
        </div>
        <div class="card-for-modal">
          <div class="cont-gr span-gr">
            <span>AFP: </span>
            <span><strong>MODELO</strong></span>
          </div>
          <div class="cont-gr span-gr">
            <span>Rut empleador: </span>
            <span><strong>22.222.222-5</strong></span>
          </div>
          <div class="cont-gr span-gr">
            <span>Monto: </span>
            <span><strong>$ 0</strong></span>
          </div>
          <div class="cont-gr span-gr">
            <span>Periodo remuneración: </span>
            <span><strong>2019-2020</strong></span>
          </div>
          <div class="cont-gr span-gr">
            <span>Observaciones: </span>
            <span
              ><strong
                >Se suspende el pago. NO SE ACREDITÓ PAGO MUTUAL</strong
              ></span
            >
          </div>
        </div>
        <div class="card-for-modal">
          <div class="cont-gr span-gr">
            <span>AFP: </span>
            <span><strong>MODELO</strong></span>
          </div>
          <div class="cont-gr span-gr">
            <span>Rut empleador: </span>
            <span><strong>22.222.222-5</strong></span>
          </div>
          <div class="cont-gr span-gr">
            <span>Monto: </span>
            <span><strong>$ 0</strong></span>
          </div>
          <div class="cont-gr span-gr">
            <span>Periodo remuneración: </span>
            <span><strong>2019-2020</strong></span>
          </div>
          <div class="cont-gr span-gr">
            <span>Observaciones: </span>
            <span
              ><strong
                >Se suspende el pago. NO SE ACREDITÓ PAGO MUTUAL</strong
              ></span
            >
          </div>
        </div>
        <div class="card-for-modal">
          <div class="cont-gr span-gr">
            <span>AFP: </span>
            <span><strong>MODELO</strong></span>
          </div>
          <div class="cont-gr span-gr">
            <span>Rut empleador: </span>
            <span><strong>22.222.222-5</strong></span>
          </div>
          <div class="cont-gr span-gr">
            <span>Monto: </span>
            <span><strong>$ 0</strong></span>
          </div>
          <div class="cont-gr span-gr">
            <span>Periodo remuneración: </span>
            <span><strong>2019-2020</strong></span>
          </div>
          <div class="cont-gr span-gr">
            <span>Observaciones: </span>
            <span
              ><strong
                >Se suspende el pago. NO SE ACREDITÓ PAGO MUTUAL</strong
              ></span
            >
          </div>
        </div>
        <hr />
        <b-pagination
          :total="total"
          v-model="current"
          :range-before="rangeBefore"
          :range-after="rangeAfter"
          :order="order"
          :size="size"
          :simple="isSimple"
          :rounded="isRounded"
          :per-page="perPage"
          :icon-prev="prevIcon"
          :icon-next="nextIcon"
          aria-next-label="Next page"
          aria-previous-label="Previous page"
          aria-page-label="Page"
          aria-current-label="Current page"
        >
        </b-pagination>

        <br />
        <div class="cont-btn">
          <b-button type="is-primary" v-on:click="nextStep">
            <i class="oi oi-data-transfer-download icon-btn"></i>

            Descargar
          </b-button>
          <b-button type="is-default" v-on:click="prevStep">Volver</b-button>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: "StepTwo",
  methods: {
    prevStep: function() {
      const prevNum = 1;
      this.$router.push({ path: `/step21/${prevNum}` });
    },
    nextStep: function() {
      const nextNum = 1;
      this.$router.push({ path: `/step21/${nextNum}` });
    }
  },

  data() {
    return {
      total: 200,
      current: 10,
      perPage: 10,
      rangeBefore: 3,
      rangeAfter: 1,
      order: "",
      size: "",
      isSimple: false,
      isRounded: false,
      prevIcon: "chevron-left",
      nextIcon: "chevron-right"
    };
  }
};
</script>
