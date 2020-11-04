<template>
  <div>
    <br>
    <h1 class="title">Inicio de Sesion</h1>
    <p>Para continuar por favor ingrese sus credenciales de Clave unica</p>
    <br>
    <b-button size="is-medium" class="button is-primary "
    icon-right="account-key"
     @click="openLoginWindow()"> Acceder con Claveunica</b-button>
  </div>
</template>

<script>
import crypto from 'crypto-js';
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    loginUrl() {
      var url = process.env.PASSPORT_AUT;
      url = url+"?client_id="+process.env.PASSPORT_CLIENT_ID;
      url = url+"&redirect_uri="+process.env.PASSPORT_CALLBACK;
      url = url+"&response_type=code&scope=*&state="+this.state;
      url = url+"&code_challenge=" + this.challenge ;
      url = url+"&code_challenge_method=S256";
      return url;
    }
  },
  mounted() {
  
    this.state = this.createRandomString(40);
    const verifier = this.createRandomString(128);

    this.challenge = this.base64Url(crypto.SHA256(verifier));
    window.localStorage.setItem('state', this.state);
    window.localStorage.setItem('verifier', verifier);
  },
  methods: {
    openLoginWindow() {
     
      window.location.href=this.loginUrl;
    },

    createRandomString(num) {
      return [...Array(num)].map(() => Math.random().toString(36)[2]).join('')
    },

    base64Url(string) {
      return string.toString(crypto.enc.Base64)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
    },
 
  }
}
</script>
