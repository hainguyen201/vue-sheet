<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" :data="store.data"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {store} from './store/store.js'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created: function(){
    window.addEventListener('message',(event)=>{
      if(event.data){
        store.setData(data);
      }
    });
  }
  
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
