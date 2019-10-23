<template>
  <el-button size="medium" type="text" class="ea_header_options" @click="reFresh()">
    <ea-icon icon-class="refresh" />
  </el-button>
</template>
<script>
export default {
  name: "EaRefresh",
  data() {
    return {};
  },
  methods: {
    reFresh() {
       let that = this;
      let view = this.$router.currentRoute;
      this.$store.dispatch("tagsView/delCachedView", view).then(() => {
        const { fullPath } = view;
        this.$nextTick(() => {
          this.$router.replace({
            path: "/redirect" + view.fullPath
          });
        });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.ea_header_options{
  font-size: 18px;
}
</style>