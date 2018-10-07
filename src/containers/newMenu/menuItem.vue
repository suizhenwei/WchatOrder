<template>
  <ul>
    <li v-for="(food,inl) in item" class="food-item" :key="inl">
      <div class="icon">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537287045888&di=00dced70fc19e73902b061d262587008&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F73%2F44%2F01200000185370134376444869965_s.jpg" alt="">
      </div>
      <div class="content">
        <h2 class="name">{{food.name}}</h2>
        <p class="desc">{{food.description}}</p>
        <div class="price">
          <span class="now">￥{{food.price}}<b class="yuan">/元</b></span>
          <calculate :food="food"></calculate>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import calculate from './calculate'
export default {
  data () {
    return {
      Active: 0
    }
  },
  components: {
    'calculate': calculate
  },
  props: {
    item: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
    this.getData()
  },
  computed: {
    ...mapState({
      goods: state => state.goods
    })
  },
  methods: {
    ...mapActions({
      getData: 'getData',
      change: 'change',
      changes: 'changes'
    })
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/css/common.scss';
.yuan{
  color:#B3B3B3;
  font-size: px2rem(10px);
}
.food-btn{
  @include btnCol(#12E340);
  padding:px2rem(5px) px2rem(10px);
  font-size: px2rem(12px)
}
.price{
  @include num(100%,px2rem(26px));
}
</style>
