<template>
<div>
   <b-loading>Validando...</b-loading> 
</div>
</template>

<script>
import cookies from 'js-cookie';
  export default {
    data() {
      return {
      }
    },
    computed:{
      redirect(){
        try{
          return cookies.get('redirect-url');
        }
        catch{
          return '/';
        }
      }
    },
    methods:{

   },
       
    mounted() {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const state = urlParams.get('state'); 

        if (code && state) {
          if (state === window.localStorage.getItem('state')) {
                    
            let params = {
              grant_type: 'authorization_code',
              client_id: process.env.PASSPORT_CLIENT_ID,
              redirect_uri: process.env.PASSPORT_CALLBACK,
              code_verifier: window.localStorage.getItem('verifier'),
              code
            }

            var self = this;
              this.$axios.$post(process.env.PASSPORT_TOKEN, params)
                .then(resp => {   
                  localStorage.removeItem('state');
                  localStorage.removeItem('verifier');
                  const {token_type, expires_in, access_token, refresh_token} = resp;
                  
                  this.$store.dispatch('setToken', {token:access_token, expires: expires_in});
                  this.$router.push(this.redirect);
                  
                })
                .catch(e => {
                this.$router.push('/login/claveunica');
              }); 
          }
        }
      },
  }
</script>