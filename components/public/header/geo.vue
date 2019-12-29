<template>
  <div class="m-geo">
    <i class="el-icon-location" />{{ $store.state.geo.position.city }}
    <nuxt-link
      class="changeCity"
      to="/changeCity">
      城市切换
    </nuxt-link>
    [几把  廊坊 提纳金]
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang='scss' scoped >
</style>
