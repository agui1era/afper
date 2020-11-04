<template>
  <div class="container">
    <!-- <b-loading :is-full-page="true" :active.sync="loading" :can-cancel="false"></b-loading> -->
    <Step1T38913 v-if="step1" />
    <Step2T38913 v-if="step2" />
    <Step4T38913 v-if="step4" />
  </div>
</template>

<script>
import Step1T38913 from "@/components/38913/Step1T38913";
import Step2T38913 from "@/components/38913/Step2T38913";
import Step4T38913 from "@/components/38913/Step4T38913";

export default {
    data() {
        return {
            step1: false,
            step2: false,
            step4: false
        }
    },
    components: {
        Step1T38913,
        Step2T38913,
        Step4T38913
    },
    created() {
    // const rut = window.localStorage.getItem('userRut');
    const step = this.$route.params.num;
    if (step === '4') {
        this.step4 = true;
    } else if (step === '1') {
        this.step1 = true;
    } else if (step === '2') {
        this.step2 = true;
    }
    }
};
</script>