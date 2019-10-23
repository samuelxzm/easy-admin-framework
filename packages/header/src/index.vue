<template>
  <div class="header">
    <slot name="tagview"/>
    <slot name="options" />
  </div>
</template>
<script>
export default {
  name: "EaHeader",
  components: {
  }
};
</script>
<style lange="scss">
.header{
  height: 100%;
  display: flex;
  align-items: center;
}
</style>