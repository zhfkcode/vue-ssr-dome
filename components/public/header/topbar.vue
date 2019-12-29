<template>
  <el-row
    :gutter="0"
    class="m-header"
  >
    <el-col :span="5">
      <Geo />
    </el-col>
    <el-col :span="11">
      <User />
    </el-col>
    <el-col :span="8">
      <nav-bar />
    </el-col>
  </el-row>
</template>
<script>
import Geo from './geo'
import User from './user'
import NavBar from './nav'
export default {
  components: {
    Geo,
    User,
    NavBar
  },
  data () {
    return {
    }
  }
}
</script>
<style lang='scss'>
  @import "@/assets/css/public/layout.scss";
  @import "@/assets/css/public/header/index.scss";
</style>
