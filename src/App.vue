<template lang="pug">
div
  main-menu
  //collapse-menu
  //menu-nav
  router-view
</template>

<script>

import Menu from './app/components/Menu.vue'
import MenuCollapse from './app/components/MenuCollapse.vue'
import MenuNav from './app/components/MenuNav.vue'
import { mapState } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    'main-menu': Menu,
    'collapse-menu': MenuCollapse,
    'menu-nav': MenuNav
  }
}
</script>

<style lang="scss">

@import './assets/css/colors.scss';
@import './assets/css/style.scss';

</style>
