<template>
  <el-button v-if="!inputShow" size="medium" class="ea_header_options" type="text" @click="clickSearch">
    <ea-icon icon-class="search" />
  </el-button>
  <el-input
    ref="search_input"
    v-else
    size="mini"
    placeholder="输入搜索内容"
    v-model="searchInput"
    class="search_input"
    @blur="inputCancel()"
  >
    <el-button slot="append" type="text">
      <ea-icon icon-class="search" />
    </el-button>
  </el-input>
</template>
<script>
export default {
  name: "EaSearch",
  data() {
    return {
      inputShow: false,
      searchInput: ""
    };
  },
  methods: {
    clickSearch() {
      this.inputShow = true;
      this.$nextTick(() => {
        this.$refs.search_input.focus();
      });
    },
    inputCancel() {
      this.inputShow = false;
    }
  }
};
</script>
<style lang="scss">
.search_input {
  .el-input__inner {
    border: 0;
    padding: 0;
  }
  .el-input-group__append {
    border: 0;
    padding: 0;
    padding-right: 30px;
    background: none;
    button {
      color: #409eff !important;
    }
  }
}
</style>
<style lang="scss" scoped>
.search_input {
  width: 120px;
  border-bottom: 1px #409eff solid;
}

.ea_header_options{
  font-size: 18px;
}

</style>