<template>
  <div>
    <ul>
      <li v-for="client in clients" :key="client">{{ client }}</li>
    </ul>
  </div>
</template>

<script>
const HTTP_SERVICE = require('../utils/http-services')
export default {
  data () {
    return {
      url: 'http://localhost:8081/super-ebay/client/findAll',
      cli: '',
      clients: [],
      client: ''
    }
  },
  mounted () {
    HTTP_SERVICE.SERVICES.GET(this.url, response => {
      this.clients = response
    },
    error => {
      console.error(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
