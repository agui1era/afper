<template>
    <h1>Su sesión se ha cerrado de forma correcta</h1>
    </template>
</template>
<script>

export default {
    created() {
 
        window.open(process.env.PASSPORT_LOGOUT);
        
            this.$store.dispatch('logout');
            this.$router.push('/login/claveunica');
          
      }
    }
 
</script>