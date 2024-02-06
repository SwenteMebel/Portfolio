<template>
    <headerVue title="Swen te Mebel" subtitle="Full-Stack Developer"/>
  <div class="grid justify-center bg-gradient-to-r from-white  to-sky-900  text-white font-serif">
    <router-view/>
  </div>
</template>

<script>

import headerVue from '@/components/Header.vue'
//import footerVue from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    headerVue,
    //footerVue,

  }
}
</script>


<style>
body{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  
}

</style>


