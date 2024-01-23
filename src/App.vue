<template>
  
  <headerVue />

  <router-view/>
</template>

<script>

import headerVue from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    headerVue

  }
}
</script>

