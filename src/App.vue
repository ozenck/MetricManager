<template>
  <div id="app">
    <!-- <MainPage :item="[
     { message: 'Foo' },
      { message: 'Bar' }
      ]" msg="Welcome to Your Vue.js App"/> -->

      <MainPage v-bind:items="teamList"/>
    
    <!-- <HeatMap msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HeatMap from './components/HeatMap.vue'
import MainPage from './components/MainPage.vue'
import { mapState } from 'vuex';
// export default {
//   name: 'App',
//   components: {
//     // HeatMap,
//     MainPage
//   }
// }
export default {
  name: 'App',
  computed:{
    ...mapState([
      'teamList'
    ])
  },
  components: {
    MainPage
  },
  created() {
        console.log("Preview started");
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
