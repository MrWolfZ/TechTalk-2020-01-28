<template>
  <button v-bind:class="classObject" v-on:click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    color: {
      type: String,
      required: true
    }
  },
  computed: {
    classObject() {
      return {
        color: this.color
      };
    }
  }
};
</script>

<style scoped>
.success {
  background-color: green;
}

.warn {
  background-color: yellow;
}

.danger {
  background-color: red;
}
</style>
