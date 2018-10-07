<template>
  <div class="order-bottom">
    <div class="menu-left" ref="menuWrapper">
      <ul>
        <li v-for="(item, index) in goods"
        class="menu-item border-1px"
        :key="index"
        :class="{'current':currentIndex === index}"
        @click="selectMenu(index, $event)">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="menu-right" ref="foodWrapper">
      <ul>
        <li v-for="(item, call) in goods" class="food-list food-list-hook" :key="call">
          <h1 class="title">{{item.name}}</h1>
          <menu-item :item="item.children"></menu-item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import menuItem from './menuItem'
export default {
  data () {
    return {
      listHeight: [],
      scrolly: 0
    }
  },
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    'menu-item': menuItem
  },
  computed: {
    currentIndex () {
      let rs = this.listHeight.findIndex(item => item >= this.scrolly)
      rs = (rs === -1) ? this.listHeight.length : rs
      rs = rs && (rs - 1)
      return rs
    }
  },
  methods: {
    _initScroll () {
      this.scrollY = new BScroll(this.$refs.foodWrapper, {
        probeType: 3,
        click: true
      })
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
      this._calculateHeight()
      this.scrollY.on('scroll', (pos) => {
        this.scrolly = Math.abs(Math.round(pos.y))
      })
    },
    _calculateHeight () {
      let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook')
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    selectMenu (index, event) {
      if (!event._constructed) {
        return
      }
      let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook')
      let el = foodList[index]
      this.scrollY.scrollToElement(el, 300)
    }
  },
  mounted () {
    this.$nextTick()
      .then(this._initScroll)
  }
}
</script>
<style scoped>
</style>
