<template>
  <Button color="success" v-on:click="$emit('click')"></Button>
</template>

<script lang="ts">
import Button from "./button.vue";

export default {
  components: {
    Button
  }
};
</script>
