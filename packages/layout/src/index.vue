<template>
  <el-container>
    <el-aside class="ea_leftcontainer" width="200px">
      <div v-show="$store.state.settings.sidebarLogo">
      <slot name="logo"/>
      </div>
      <slot name="sidemenu" />
    </el-aside>
    <el-container :class="$store.state.settings.fixedHeader?'':'no_headerfix'">
      <el-header style="text-align: right; font-size: 12px">
        <slot name="header" />
      </el-header>
      <el-main>
        <slot name="main" />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "EaLayout"
};
</script>
<style lange="sass">
html,
body,
#app,
#app > .el-container {
  height: 100%;
  margin: 0;
  padding: 0;
}
.ea_leftcontainer{
  background: #545c64;
  overflow-x: hidden;
}
.el-header{
  border-bottom: #e5e5e5 solid 1px;
}
.el-container.no_headerfix{
  display: block;
    height: 100%;
    overflow: auto;
}
</style>