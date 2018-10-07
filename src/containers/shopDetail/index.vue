<template>
  <div class="shop">
    <div class="shop-detail">
      <dl >
        <dt>
          <p @click="goNewMenu">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537287045888&di=00dced70fc19e73902b061d262587008&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F73%2F44%2F01200000185370134376444869965_s.jpg" alt="">
          </p>
        </dt>
        <dd>
          <div>
            <h4>满记甜品旗舰店(西直门西环广场凯德MALL店)</h4>
            <h6>营业中</h6>
            <p><img src="../../assets/svg/错号.svg" alt=""><img src="../../assets/svg/错号.svg" alt=""><img src="../../assets/svg/错号.svg" alt=""><img src="../../assets/svg/错号.svg" alt=""><img src="../../assets/svg/错号.svg" alt=""><img src="../../assets/svg/错号.svg" alt=""></p>
            <h5><span>口味8.5</span><span>环境8.5</span><span>服务8.5</span></h5>
          </div>
        </dd>
      </dl>
    </div>
    <div class="address">
      <span><img src="../../assets/svg/定位.svg" alt=""></span>
      <b>西直门外大街1号西环广场T1，五层21号(近西直门店地铁站)</b>
      <i><img src="../../assets/svg/电话 (1).svg" alt=""></i>
    </div>
    <div class="peisong">
      <h1 class="peisong-title">配送信息</h1>
      <h2><img src="../../assets/svg/shijian.svg" alt=""><span>10:00-21:00</span></h2>
      <h2><img src="../../assets/svg/钱 (1).svg" alt="">起送￥20配送￥6满50免运费</h2>
      <h2><img src="../../assets/svg/配送1.svg" alt="">送达</h2>
      <h2><img src="../../assets/svg/地址.svg" alt="">朝外SOHO、凯德MALL等</h2>
    </div>
    <div class="activity">
      <h1 class="activity-title">活动与服务</h1>
      <h2><img src="../../assets/svg/时间维度.svg" alt="">10:00-21:00</h2>
      <h2><img src="../../assets/svg/钱.svg" alt="">满30减10；满60元减15元(在线支付专享)</h2>
      <h2><img src="../../assets/svg/配送1.svg" alt="">折扣商品3.7折起</h2>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    goNewMenu () {
      this.$router.push('/newMenu')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/css/common.scss';
.shop{
  @include num(100%, 100%);
  display: flex;
  flex-direction: column;
  // overflow: hidden;
  padding:0 px2rem(16px);
  background: #fff;
}
.shop-detail{
  @include num(100%,px2rem(151px));
  dl{
    @include num(100%,100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom:1px solid #ccc;
    box-sizing: border-box;
    dt{
      flex:4;
      height:100%;
      display: flex;
      align-items: center;
      p{
        @include num(px2rem(111px),px2rem(111px));
        margin:0 auto;
        img{
          @include num(100%,100%);
        }
      }
    }
    dd{
      flex:6;
      height:100%;
      display: flex;
      align-items: center;
      div{
        @include num(100%,100%);
        padding:px2rem(20px) 0;
        h4{
          font-size: px2rem(16px);
          font-weight: 800;
          @include text1(2);
          line-height: 1.5;
        }
        h6{
          font-size: px2rem(14px);
          color:#ccc;
          margin-top:px2rem(3px);
          line-height: 1.5;
        }
        p{
          @include num(100%,px2rem(16px));
          display: flex;
          line-height: 1.5;
          img{
            @include num(px2rem(16px),px2rem(16px));
          }
        }
        h5{
          line-height: 1.5;
          @include text1(1);
        }
      }
    }
  }
}
.address{
  display: flex;
  align-items: center;
  line-height: 1.5;
  padding:px2rem(10px) 0;
  border-bottom:8px solid #eee;
  span{
    flex:1;
    text-align: center;
    img{
      @include num(px2rem(16px),px2rem(16px));
    }
  }
  b{
    flex:8;
    border-right:1px solid #ccc;
    padding:0 px2rem(4px);
    @include text1(2)
  }
  i{
    flex:1;
    text-align: center;
    img{
      @include num(px2rem(16px),px2rem(16px));
    }
  }
}
.peisong,.activity{
  @include num(100%,auto);
  padding:px2rem(10px) 0;
  border-bottom:4px solid #F7F7F7;
  .peisong-title,.activity-title{
    padding-left: px2rem(14px);
    line-height: px2rem(20px);
    border-left: px2rem(2px) solid  #147526;
    font-size: px2rem(12px);
    color: rgb(147, 153, 159);
    background: #fff;
  }
  h2{
    @include num(100%,px2rem(22px));
    color:#303030;
    font-size: px2rem(14px);
    line-height: px2rem(22px);
    @include text1(1);
    img{
      margin:0 px2rem(10px) 0 0;
      @include num(px2rem(16px),px2rem(16px));
    }
    span{
      line-height: px2rem(22px);
    }
  }
}
</style>
