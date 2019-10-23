<template>
      <el-scrollbar
        wrap-class="sidemenu-scrollbar__wrap"
        view-class="sidemenu-scrollbar__view"
      >
  <el-menu
    :router="true"
    :background-color="BackgroundColor"
    :text-color="TextColor"
    :active-text-color="ActiveTextColor"
  >
    <menu-item v-for="item in routers" :key="item.path" :router="item" basepath />
  </el-menu>
      </el-scrollbar>
</template>
<script>
import MenuItem from "./menuitem";
export default {
  name: "EaSidemenu",
  props: {
    BackgroundColor: {
      type: String,
      default: "#545c64"
    },
    TextColor: {
      type: String,
      default: "#fff"
    },
    ActiveTextColor: {
      type: String,
      default: "#ffd04b"
    }
  },
  components: {
    MenuItem
  },
  computed: {
    routers() {
      let routers = global.menu.filter(e => {
        return e.path == "/";
      });
      return routers[0].children;
    }
  },
  methods: {}
};
</script>
<style lang="scss">
.el-scrollbar__wrap{
  overflow-x: hidden!important;
}
</style>
<style lang="scss" scoped>

.el-scrollbar{
  height: calc(100% - 60px);
}
</style>