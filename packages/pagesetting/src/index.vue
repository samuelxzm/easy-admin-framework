<template>
  <el-dropdown
    size="medium"
    style="margin-left:15px;align-items: center;display: flex;"
    :hide-on-click="false"
  >
    <el-button size="medium" type="text" class="ea_header_options">
      <ea-icon icon-class="set" />
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <div class="drawer-container">
        <div>
          <h5 class="drawer-title">系统布局配置</h5>
          <div class="drawer-item">
            <span>开启多页签</span>
            <el-switch v-model="tagsView" class="drawer-switch" />
          </div>
          <div class="drawer-item">
            <span>头部固定</span>
            <el-switch v-model="fixedHeader" class="drawer-switch" />
          </div>

          <div class="drawer-item">
            <span>显示logo</span>
            <el-switch v-model="sidebarLogo" class="drawer-switch" />
          </div>
          <slot name="custom"/>
        </div>
      </div>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
export default {
  name: "EaPagesetting",
  data() {
    return {};
  },
  computed: {
    fixedHeader: {
      get() {
        // return this.$store.state.settings.fixedHeader;
        return true
      },
      set(val) {
        this.$store.dispatch("settings/changeSetting", {
          key: "fixedHeader",
          value: val
        });
      }
    },
    tagsView: {
      get() {
        // return this.$store.state.settings.tagsView;
        return true
      },
      set(val) {
        this.$store.dispatch("settings/changeSetting", {
          key: "tagsView",
          value: val
        });
      }
    },
    sidebarLogo: {
      get() {
        // return this.$store.state.settings.sidebarLogo;
        return true
      },
      set(val) {
        this.$store.dispatch("settings/changeSetting", {
          key: "sidebarLogo",
          value: val
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.drawer-container {
  padding: 10px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;
  .drawer-title {
    margin-top: 8px;
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 22px;
  }
  .drawer-item {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    padding: 12px 0;
    width: 140px;
  }
  .drawer-switch {
    float: right;
  }
}

.ea_header_options{
  font-size: 18px;
}

</style>
