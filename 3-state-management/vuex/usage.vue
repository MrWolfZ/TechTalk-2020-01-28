<template>
  <div>
    <p id="value">{{ counter }}</p>
    <p id="valuesTimesFive">{{ counterTimesFive }}</p>
    <p>
      <button id="incBtn" @click="increment">Increment</button>
      <button id="decBtn" @click="decrement">Decrement</button>
    </p>
  </div>
</template>

<script lang="ts">
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    counterTimesFive() {
      return this.$store.getters.counterTimes(5);
    }
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    }
  }
};
</script>
