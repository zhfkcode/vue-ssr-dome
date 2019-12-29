<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <Menu />
      </el-col>
      <el-col :span="19">2</el-col>
    </el-row>
    <el-row>
      <el-col :span="24">1</el-col>
    </el-row>
  </div>
</template>

<script>
import Menu from '../components/index/menu'
export default {
  components: {
    Menu
  }
}
</script>
<style lang="scss">
@import "@/assets/css/index/index";
</style>
