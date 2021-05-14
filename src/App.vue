<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import DefaultPage from 'views/DefaultPage'

  export default {
    name: 'App',
    data() {
      return {

      }
    },
    components: {
      DefaultPage
    },
    methods: {

    }
  }
</script>

<style>

</style>
