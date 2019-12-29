<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
          title="美团app"
          alt="美团app"
        >
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="search" placeholder="搜索商家或地点" @focus="focus" @blur="blur" @input="input" />
          <button class="el-button el-button--primary">
            <i class="el-icon-search" />
          </button>
          <dl v-if="isHotPlace" class="hotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, key) in searchList" :key="key">
              {{ item }}
            </dd>
          </dl>
          <dl v-if="isSuggest" class="searchList">
            <dd v-for="(item, key) in searchList" :key="key">
              {{ item }}
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#">西安美食</a>
          <a href="#">西安美食</a>
          <a href="#">西安美食</a>
          <a href="#">西安美食</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">
              煤炭外卖
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="movie">
              猫眼电影
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="takeout">
              煤炭外卖
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="takeout">
              煤炭外卖
            </nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
          <li>
            <i class="refund" />
            <p class="txt">
              随时退
            </p>
          </li>
          <li>
            <i class="single" />
            <p class="txt">不满意免单</p>
          </li>
          <li>
            <i class="overdue" />
            <p class="txt">过期退</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      search: '',
      isFocus: false,
      searchList: ['火锅', '火锅', '火锅', '火锅', '火锅'],
      suggestList: ['火锅', '火锅', '火锅', '火锅', '火锅']
    }
  },
  computed: {
    isHotPlace () {
      return this.isFocus && !this.search
    },
    isSuggest () {
      return this.isFocus && this.search
    }
  },
  methods: {
    focus () {
      this.isFocus = true
    },
    blur () {
      const self = this
      setTimeout(() => {
        self.isFocus = false
      })
    },
    input () {
      console.log('2222')
    }
  }
}
</script>
<style lang='scss' scoped >
</style>
