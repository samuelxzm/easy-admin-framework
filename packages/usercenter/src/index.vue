<template>
    <el-dropdown
      size="medium"
      style="margin-left:15px;align-items: center;display: flex;"
    >
      <div class="avatar-wrapper">
        <el-avatar
          shape="square"
          size="large"
          src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
        ></el-avatar>
        <i class="el-icon-caret-bottom" />
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-s-custom">个人中心</el-dropdown-item>
        <el-dropdown-item icon="el-icon-key">修改密码</el-dropdown-item>
        <el-dropdown-item divided icon="el-icon-switch-button" @click.native="loginOut">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
</template>
<script>
export default {
  name: "EaUsercenter"
};
</script>