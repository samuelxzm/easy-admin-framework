<template>
  <el-button class="ea_header_options" size="medium" type="text" @click="screenFull()">
    <ea-icon :icon-class="isFullScreen?'fullScreen':'unfullScreen'" />
  </el-button>
</template>
<script>
import screenfull from "screenfull";
export default {
  name:"EaFullscreen",
  data() {
    return {
      isFullScreen:true
    };
  },
  methods: {
    screenFull() {
      if (!screenfull.isEnabled) {
        this.$message({
          message: "不支持此功能",
          type: "warning"
        });
        return false;
      }
      screenfull.toggle();
      this.isFullScreen=!this.isFullScreen
    }
  }
};
</script>
<style lang="scss" scoped>

.ea_header_options{
  font-size: 18px;
}

</style>