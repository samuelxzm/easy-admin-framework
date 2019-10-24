<template>
  <!-- <div>{{tableData}}</div> -->
  <div style="height:1000px;">
    <div style="text-align:right;margin-bottom:5px;">
    <el-button size="mini" @click="exportJson">导出</el-button>
    <el-button size="mini" type="primary" plain>增加</el-button>
    </div>
    <el-table
      :data="tableData.routerList"
      row-key="path"
      :tree-props="{children: 'children'}"
      border
      default-expand-all
    >
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="path" label="路径"></el-table-column>
      <el-table-column prop="component" label="组件"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            icon="el-icon-edit"
            circle
            plain
            @click="handleEdit(scope.$index, scope.row)"
          ></el-button>
          <el-button
            size="mini"
            icon="el-icon-delete"
            circle
            plain
            type="danger"
            @click="handleDelete(scope.$index, tableData.routerList)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import FileSaver from "file-saver";
export default {
  data() {
    return {
      tableData: require("../router.json")
    };
  },
  created() {
  },
  methods: {
    handleDelete(index, rows) {
      console.log(index);
      //  rows.splice(index, 1);
    },
    handleEdit(index, row) {
      console.log(index);
    },
    exportJson() {
      const data = JSON.stringify(this.tableData);
      const blob = new Blob([data], { type: "" });
      FileSaver.saveAs(blob, "router.json");
    }
  }
};
</script>
<style lang="scss" scoped>
.logo_img {
  height: 30px;
}
</style>