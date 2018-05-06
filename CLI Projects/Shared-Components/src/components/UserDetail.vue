<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
      <p>User Name: {{ name }}</p>
      <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
  export default {
    props: {
      name: String,
      default: "missing name"
    },
    methods: {
      resetName() {
        this.name = "uhh default"
        this.$emit("nameWasReset", this.name)
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
