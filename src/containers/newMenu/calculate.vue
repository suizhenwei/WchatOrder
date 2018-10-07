<template>
  <div>
    <button class="food-btn" v-if="food.count==0" @click="count(food)">选规格</button>
    <div class="pric" v-if="food.count!==0">
      <span class="del" @click="counts(food.name, 'cut')">-</span>
      <span class="count"><b>{{food.count}}</b></span>
      <span class="add" @click="counts(food.name, 'add')"><b>+</b></span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    food: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  mounted () {
    // console.log(this)
    this.shopCar()
  },
  methods: {
    ...mapActions({
      change: 'change',
      changes: 'changes',
      shopCar: 'shopCar'
    }),
    count (str) {
      this.change(str)
      this.shopCar()
    },
    counts (str, control) {
      const obj = {
        str: str,
        control: control
      }
      this.changes(obj)
      this.shopCar()
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/css/common.scss';
.food-btn{
  @include btnCol(#12E340);
  padding:px2rem(5px) px2rem(15px);
  font-size: px2rem(12px);
  font-weight: 600
}
.price{
  @include num(100%,px2rem(26px));
}
.pric{
  span{
    font-size: px2rem(20px);
  }
}
.del{
  @include radius(px2rem(25px));
  color:#00e64a;
  border:1px solid #00e64a;
  box-sizing: border-box;
  line-height: px2mre(25px)
}
.count{
  border:none;
  b{
    font-size: px2rem(16px)
  }
}
.add{
  @include radius(px2rem(25px));
  background:#00e64a;
  color:#fff;
  border:1px solid #00e64a;
  box-sizing: border-box;
  line-height: px2mre(25px)
}
</style>
