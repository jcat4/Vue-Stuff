<template>
  <!-- wrap all template code (in components) in one root element, else it will complain -->
  <div>
    <p>server status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        status: "uhhh"
      }
    },
    methods: {
      changeStatus() {
        this.status = "changed!"
      }
    }
  }
</script>
