<template>
  <div class="container">
    <UiKitCartolaStjStepTwo />
  </div>
</template>

<script>
import UiKitCartolaStjStepTwo from "../../../components/5220/UiKitCartolaStjStepTwo";
import iConfig from "~/static/json/5220/cartolaStj.json";
export default {
  name: "UiKitCartolaStj",
  data() {
    return {
      iConfig: iConfig,
    }
  },
  components: {
    UiKitCartolaStjStepTwo
  },
  head() {
    return {
      title: this.iConfig.titulo,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.iConfig.descripcion
        }
      ]
    };
  },
  middleware: 'auth'
};
</script>
