<template>
  <div class='m-menu'>
    <dl class="nav" @mouseleave="mouseLeave">
      <dt>全部分类</dt>
      <dd v-for="(item, key) in menu" :key="key" @mouseenter="mouseEnter(item.type)">
        <i :class="item.type" />
        {{ item.name }}
        <span class="arrow" />
      </dd>
    </dl>
    <div v-show="kind" class="detail" @mouseenter="sover" @mouseleave="sout">
      <template v-for="(item, idx) in detailList.child">
        <h4 :key="idx">
          {{ item.title }}
        </h4>
        <span v-for="chl in item.child " :key="chl">
          {{ chl }}
        </span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      kind: '',
      menu: [
        {
          type: 'food',
          name: '美食',
          child: [
            {
              title: '没事',
              child: ['香锅烤鱼', '粤港菜中式', '烧烤/烤串', '西北菜咖啡酒吧茶馆云贵菜东南亚菜海鲜素食', '台湾/客家菜创意菜汤/粥/炖菜蒙餐新疆菜其', '他美食京菜鲁菜']
            }
          ]
        },
        {
          type: 'takeout',
          name: '外卖',
          child: [
            {
              title: '外卖',
              child: ['香锅烤鱼', '粤港菜中式', '烧烤/烤串', '西北菜咖啡酒吧茶馆云贵菜东南亚菜海鲜素食', '台湾/客家菜创意菜汤/粥/炖菜蒙餐新疆菜其', '他美食京菜鲁菜']
            }
          ]
        },
        {
          type: 'hotel',
          name: '酒店'
        },
        {
          type: 'homestay',
          name: '榛果民宿'
        },
        {
          type: 'movie',
          name: '猫眼电影'
        },
        {
          type: 'airport',
          name: '机票 / 火车票'
        },
        {
          type: 'ktv',
          name: '休闲娱乐 / KTV'
        },
        {
          type: 'life',
          name: '生活服务'
        },
        {
          type: 'hair',
          name: '丽人 / 美发 / 医学美容'
        },
        {
          type: 'marry',
          name: '结婚 / 婚纱摄影 / 婚宴'
        },
        {
          type: 'offspring',
          name: '亲子 / 儿童乐园 / 幼教'
        },
        {
          type: 'sport',
          name: '运动健身 / 健身中心'
        },
        {
          type: 'furniture',
          name: '家装 / 建材 / 家居'
        },
        {
          type: 'study',
          name: '学习培训 / 音乐培训'
        },
        {
          type: 'health',
          name: '医疗健康 / 宠物 / 爱车'
        },
        {
          type: 'bar',
          name: '酒吧 / 密室逃脱'
        }
      ]
    }
  },
  computed: {
    detailList () {
      const res = this.menu.filter(item => item.type === this.kind)[0]
      return res || []
    }
  },
  methods: {
    mouseLeave () {
      const self = this
      self._timer = setTimeout(() => {
        self.kind = ''
      }, 150)
    },
    mouseEnter (type) {
      this.kind = type
    },
    sover () {
      clearTimeout(this._timer)
    },
    sout () {
      this.kind = ''
    }
  }
}
</script>
