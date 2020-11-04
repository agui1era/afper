<template>
    <div class="container nav-top uikit">
      <a href="/"><img src="https://cdn-sach2.s3.amazonaws.com/uikit-cha/img/logo-cha.bc286b7c.png" alt="Logo ChileAtiende" /></a>
      <nav class="volver-ficha form-cha">
        <a href="#" class="is-primary"><i class="fas fa-chevron-left"></i> Volver a la ficha</a>
      </nav>
    </div>
      
</template>
<script>
import ModalMenuTopSm from "~/components/ModalMenuTopSm";

export default {
    data: function() {
        return {
            isActive: false
        }
    },
    components: {
        ModalMenuTopSm
    }
}
</script>