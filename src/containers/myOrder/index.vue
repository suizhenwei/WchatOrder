<template>
  <div class="myOrder">
    <div class="myOrder-top">
      <span @click="goBack"><img src="../../assets/svg/返回.svg" alt=""></span>
      <b>确认订单</b>
      <span></span>
    </div>
    <section>
      <div class="myOrder-add">
        订单配送至
        <p @click="goNearby">选择收货地址 <img src="../../assets/svg/右箭头.svg" alt=""></p>
      </div>
      <div class="myOrder-time">
        <div class="myOrder-time-time">
          <p class="p1">
            <b>送达时间</b><strong>蜂鸟专送</strong>
          </p>
          <p class="p2">
            尽快送达(15:20送答)<img src="../../assets/svg/箭头.svg" alt="">
          </p>
        </div>
        <div class="myOrder-time-price">
          <b>支付方式</b>
          <strong>在线支付</strong>
        </div>
      </div>
      <div class="myOrder-order">
        <h2>{{seller.name}}</h2>
        <ul>
          <li v-for="(item, index) in orderList" :key="index">
            <span>{{index}}</span>
            <span>x{{item[0]}}</span>
            <span>￥{{item[1]}}</span>
          </li>
          <li><span>餐盒</span><span></span><span>￥{{canHe}}</span></li>
          <li><span>配送费</span><span></span><span>￥{{song}}</span></li>
          <li><span>本店新客立减</span><span></span><span style="color:red">-￥{{you}}</span></li>
        </ul>
      </div>
    </section>
    <div class="myOrder-bottom">
      <span class="footer-icon">
        <strong>￥{{(sums+song+canHe-you) *1}}</strong>丨<b>已优惠￥{{you}}</b>
      </span>
      <button class="footer-btn" @click="goPay">去支付</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      you: 1,
      canHe: 2,
      song: 6.5
    }
  },
  computed: {
    ...mapState({
      sums: state => state.sum,
      seller: state => state.seller,
      orderList: state => state.orderList
    })
  },
  mounted () {
    this.getList()
    this.shopCar()
  },
  methods: {
    goBack () {
      this.$router.push('/newMenu')
    },
    goPay () {
      this.$router.push('/quickPay')
    },
    goNearby () {
      this.$router.push('/nearbyshop')
    },
    ...mapActions({
      shopCar: 'shopCar',
      getList: 'getList'
    })
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/css/common.scss';
.myOrder{
  @include num(100%,100%);
  background: linear-gradient(to bottom left, #0079FE , #fff);
  padding:0 px2rem(6px);
  display: flex;
  flex-direction: column;
}
section{
  flex:1;
  overflow: auto;
}
.myOrder-top{
  @include num(100%,px2rem(44px));
  display: flex;
  align-items: center;
  padding:0 px2rem(13px);
  span,b{
    flex:1;
    text-align: left;
    color:#fff;
    img{
      @include num(px2rem(20px), px2rem(17px));
    }
  }
  b{
    text-align: center;
  }
}
.myOrder-add{
  color:#fff;
  font-size: px2rem(14px);
  padding:px2rem(25px) px2rem(13px) 0 px2rem(13px);
  p{
    line-height: 1.5;
    font-size: px2rem(22px);
    font-weight: 500;
    img{
      @include num(px2rem(14px), px2rem(16px))
    }
  }
}
.myOrder-time{
  @include num(100%,px2rem(120px));
  background: #fff;
  margin-top:10px;
  .myOrder-time-time{
    width: 100%;
    padding: px2rem(20px) px2rem(13px);
    display: flex;
    justify-content:space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    .p1{
      display: flex;
      flex-direction: column;
    }
    .p2{
      // position: relative;
      padding: 0 px2rem(10px);
      img{
        @include num(px2rem(10px), px2rem(10px));
        // position: absolute;
        // right:px2rem(-30px);
        // bottom: px2rem(-17px);
      }
    }
  }
  .myOrder-time-price{
    padding: px2rem(10px) px2rem(13px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    strong{
      color:#4C90B7
    }
  }
}
.myOrder-order{
  margin-top:px2rem(8px);
  @include num(100%,auto);
  background: #fff;
  padding:0 px2rem(22px);
  h2{
    font-weight: 600;
    font-size: px2rem(16px);
    line-height: 1.5;
    padding:px2rem(20px) 0 px2rem(14px) 0;
    border-bottom:1px solid #F2F2F2;
  }
  ul{
    @include num(100%,auto);
    li{
      @include num(100%,px2rem(62px));
      line-height: px2rem(62px);
      display:flex;
      border-bottom:1px solid #F2F2F2;
      box-sizing: border-box;
      span{
        flex:1;
        text-align: center;
      }
    }
  }
}
.myOrder-bottom{
  @include num(100%,px2rem(50px));
  display: flex;
  position: relative;
  bottom:0;
  left:0;
}
.footer-icon{
  flex:7;
  display: flex;
  background: #404040;
  position: relative;
  z-index: 100;
  line-height: px2rem(50px);
  color:#616161;
  strong{
    padding-left:px2rem(10px);
    color:#fff;
    font-size: px2rem(16px);
    line-height: px2rem(50px);
  }
  b{
    color:#616161;
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
  font-size: px2rem(16px);
}
</style>
