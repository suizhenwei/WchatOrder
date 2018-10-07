<template>
  <div class="footer">
    <div class="car-bg" v-if="show">
      <div class="delete">
        <p>
          <span @click="del">清空购物车</span>
          <img src="../../assets/svg/清空删除.svg" alt="">
        </p>
        <ul>
          <li v-for="(item, key) in checkData" :key="key">
            <span>{{item.name}}</span>
            <calculate :food="item"></calculate>
          </li>
        </ul>
      </div>
    </div>
    <span class="footer-icon">
      <b @click="shopBtn"><img src="../../assets/svg/购物车.svg" alt=""><em>{{checkData.length}}</em></b>
      <strong>￥{{sums}}</strong>
    </span>
    <button class="footer-btn" @click="myOrder">选好了</button>
  </div>
</template>

<script>
import calculate from '@/containers/newMenu/calculate'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      show: false
    }
  },
  computed: {
    ...mapState({
      sums: state => state.sum,
      checkData: state => state.checkData
    })
  },
  components: {
    calculate
  },
  methods: {
    shopBtn () {
      this.show = !this.show
    },
    del () {
      localStorage.removeItem('menu')
    },
    ...mapActions({
      getData: 'getData',
      change: 'change',
      changes: 'changes',
      shopCar: 'shopCar'
    }),
    myOrder () {
      this.$router.push('/myorder')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/css/common.scss';
.car-bg{
  @include num(100%,100%);
  background:rgba(0,0,0,0.5);
  position: fixed;
  top:0;
  left:0;
  z-index: 100;
}
.delete{
  @include num(100%,30%);
  background: #fff;
  position: absolute;
  bottom:px2rem(50px);
  left:0;
  display: flex;
  flex-direction: column;
  p{
    @include num(100%,px2rem(50px));
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: #F6F6F6;
    border-bottom:1px solid #E1E1E1;
    box-sizing: border-box;
    span{
      margin:0 px2rem(5px);
      color:#AEAEAE;
    }
    img{
      @include num(px2rem(20px),px2rem(23px));
    }
  }
  ul{
    flex:1;
    overflow: auto;
    li{
      padding:px2rem(5px) px2rem(10px);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
.footer{
  @include num(100%,px2rem(50px));
  display: flex;
  position: relative;
}
.footer-icon{
  flex:7;
  display: flex;
  background: #404040;
  position: relative;
  z-index: 100;
  b{
    @include num(px2rem(60px),px2rem(60px));
    border-radius: 50%;
    background: #12E340;
    display:flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:-15px;
    left:10px;
    img{
      @include num(70%,auto)
    }
    em{
      @include radius(px2rem(20px));
      background: red;
      position: absolute;
      top:0;
      right:0;
      color:#fff
    }
  }
  strong{
    padding-left:px2rem(80px);
    color:#fff;
    font-weight: 800;
    font-size: px2rem(16px);
    line-height: px2rem(50px);
  }
}
.footer-btn{
  flex:3;
  @include btnCol(#12E340);
  border-radius:0;
  position: relative;
  z-index: 100;
  font-size: px2rem(12px);
  font-weight: 600;
}
</style>
