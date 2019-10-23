<template>
  <div class="nav_option">
    <!-- <hearder-search></hearder-search> -->

    <el-button v-if="defaultSetting.openAlone" size="medium" type="text" @click="openAlone()">
      <svg-icon icon-class="show" />
    </el-button>
    <el-button v-if="defaultSetting.message" size="medium" type="text">
      <svg-icon icon-class="message" />
    </el-button>


  </div>
</template>
<script>
//import HearderSearch from "@/components/Header/HeaderSearch";
// import svgIcon from "@/components/SvgIcon"
import screenfull from "screenfull";
import settings from "@/settings.js";
import settingPlane from "../../RightPanel/Settings/index";
export default {
  components: {
    settingPlane
  },
  data() {
    return {
      isFullscreen: false,
      defaultSetting: settings
    };
  },
  mounted() {
    this.screenFullInit();
  },
  beforeDestroy() {
    this.screenFullIDestroy();
  },
  methods: {
    openAlone() {
      let url = this.$router.currentRoute.path + "?nolayout=true";
      Object.keys(this.$router.currentRoute.query).forEach(i => {
        url = url + "&" + i + "=" + this.$router.currentRoute.query[i];
      });
      window.open(url, "_blank");
    },
    screenFull() {
      if (!screenfull.enabled) {
        this.$message({
          message: "不支持此功能",
          type: "warning"
        });
        return false;
      }
      screenfull.toggle();
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen;
    },
    screenFullInit() {
      if (screenfull.enabled) {
        screenfull.on("change", this.change);
      }
    },
    screenFullIDestroy() {
      if (screenfull.enabled) {
        screenfull.off("change", this.change);
      }
    },
    reloadRouter(path) {
      this.$router.push({
        name: "redirect",
        params: {
          path: path
        }
      });

      this.$router.push({
        path: "redirect",
        query: {
          path: path
        }
      });
    },
    reFresh() {
      let that = this;
      let view = this.$router.currentRoute;

      this.$store.dispatch("tagsView/delCachedView", view).then(() => {
        const { fullPath } = view;
        this.$nextTick(() => {
          this.$router.replace({
            path: "/redirect" + fullPath
          });
        });
      });
    },
    closeOthersTags() {
      let view = this.$router.currentRoute;
      this.$router.push(view);
      this.$store.dispatch("tagsView/delOthersViews", view).then(() => {
        // this.moveToCurrentTag()
      });
    },
    closeAllTags() {
      let that=this
      let view = this.$router.currentRoute;
      this.$store.dispatch("tagsView/delAllViews").then(({ visitedViews }) => {
        that.$nextTick(() => {
          that.$router.replace({
            path: "/redirect" +"/data/dic"
          });
        });
      });
    },
    loginOut() {
      let that = this;
      this.getRequest("/api/ts-verity/login/loginOut").then(result => {
        that.$router.push("/login");
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.nav_option {
  display: flex;
  justify-content: flex-end;
  align-content: center;
  padding-right: 20px;
  & > .el-button {
    color: #4b4b4b;
    font-size: 20px;
    & + .el-button {
      margin-left: 15px;
    }
  }
}
.avatar-wrapper {
  display: flex;
  align-items: flex-end;
  & > .el-avatar--square {
    border-radius: 10px;
  }
  & > .el-icon-caret-bottom {
    font-size: 12px;
    margin-left: 5px;
  }
}
</style>
