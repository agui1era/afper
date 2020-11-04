<template>
  <div :class="'form-progress items-' + steps">
    <template v-for="step in steps">
      <div
        class="form-progress-indicator"
        :class="step == active ? ' p-active' : step < active ? 'p-after' : ''"
        :key="step"
      >
        <span
          ><strong>{{ step }}</strong></span
        >
      </div>
      <div
        v-if="step != steps"
        class="form-progress-bar"
        :class="step < active ? 'p-after' : ''"
        :key="step"
      ></div>
    </template>
  </div>
</template>
<script>
export default {
  props: ["steps", "active"]
};
</script>
