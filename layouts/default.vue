<template>
  <div class="layout-default">
    <el-container class="layout-header">
      <el-header height="auto"><my-header /></el-header>
      <el-main> <nuxt /></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
import MyHeader from '@/components/public/header/index'
export default {
  components: {
    MyHeader
  }
}
</script>
