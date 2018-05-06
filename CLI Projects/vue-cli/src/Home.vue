<template>
   <!--loop will generate 5 root objects, so need to enclose in a div -->
  <div>
    <app-server-status v-for="server in 5"></app-server-status>
  </div>
</template>

<script>
  //Again, name "ServerStatus" doesn't matter here since we only exported one obj
  import ServerStatus from './ServerStatus.vue'
  export default {
    components: {
      'app-server-status': ServerStatus
    }
  }
</script>
