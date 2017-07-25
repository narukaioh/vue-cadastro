
<template lang="pug">
.box-collapsed-menu
    el-radio-group(v-model='isCollapse', style='margin-bottom: 20px;')
        el-radio-button(:label='false') expand
        el-radio-button(:label='true') collapse
    el-menu.el-menu-vertical-demo(default-active='2', @open='handleOpen', @close='handleClose', :collapse='isCollapse')
        el-submenu(index='1')
            template(slot='title')
                i.el-icon-message
                span(slot='title') Navigator One
            el-menu-item-group
                span(slot='title') Group One
                el-menu-item(index='1-1') item one
                el-menu-item(index='1-2') item two
            el-menu-item-group(title='Group Two')
                el-menu-item(index='1-3') item three
            el-submenu(index='1-4')
                span(slot='title') item four
                el-menu-item(index='1-4-1') item one
        el-menu-item(index='2')
            i.el-icon-menu
            span(slot='title') Navigator Two
        el-menu-item(index='3')
            i.el-icon-setting
            span(slot='title') Navigator Three
</template>

<script>
export default {
    data() {
        return {
            isCollapse: false
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="scss">

.box-collapsed-menu {
    width: 35%;
    border: 1px solid;
}

</style>