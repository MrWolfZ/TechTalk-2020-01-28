<template>
  <div>
    <Button color="success" v-on:click="onClick(1)"></Button>
    <SuccessButton v-on:click="onClick(2)"></SuccessButton>
  </div>
</template>

<script lang="ts">
import Button from "./button/button.vue";
import SuccessButton from "./button/success-button.vue";

export default {
  components: {
    Button,
    SuccessButton
  },
  methods: {
    onClick(index: number) {
      alert(`button ${index} clicked`)
    }
  }
};
</script>
