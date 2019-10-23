<template>
  <el-submenu v-if="'children' in router" :index="basepath+'/'+router.path">
    <template slot="title">
      <i :class="router.meta.icon"></i>
      <span>{{router.name}}</span>
    </template>
    <menu-item
      v-for="item in router.children"
      :key="item.path"
      :router="item"
      :basepath="basepath+'/'+router.path"
    />
  </el-submenu>
  <el-menu-item v-else :index="basepath+'/'+router.path">
    <i :class="router.meta.icon"></i>
    <span slot="title">{{router.name}}</span>
  </el-menu-item>
</template>
<script>
export default {
  name: "menu-item",
  props: {
    basepath: {
      type: String
    },
    router: {
      type: Object
    }
  },
  computed: {}
};
</script>