<template lang="pug">
div
  main-menu
  router-view
</template>

<script>

import Menu from './app/components/Menu.vue'
import { mapState } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    'main-menu': Menu
  }
}
</script>

<style lang="scss">

@import './assets/css/colors.scss';
@import './assets/css/style.scss';

</style>
