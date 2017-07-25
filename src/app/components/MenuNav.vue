<template lang="pug">
div
    .line
    el-menu.el-menu-demo(:default-active='activeIndex2', mode='horizontal', @select='handleSelect')
        el-menu-item(index='1') Processing Center
        el-submenu(index='2')
            template(slot='title') Workspace
            el-menu-item(index='2-1') item one
            el-menu-item(index='2-2') item two
            el-menu-item(index='2-3') item three
        el-menu-item(index='3')
            a(href='https://www.ele.me', target='_blank') Orders

</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>