<template>
  <div class="nearbyshop">
    <p>
      <span style="text-align:left;"><img src="../../assets/svg/右箭头.svg" alt=""></span>
      <span>附近的店</span>
      <span></span>
    </p>
    <ul>
      <li v-for="(item, index) in nearbyList.pois" :key="index" >
        <router-link  :to="{name: 'mapShop', params: {location: item}}">
          <h3><span>{{item.title}}</span> <b>{{item._distance}}米</b></h3>
          <p>{{item.address}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      nearbyList: state => state.nearbyList
    })
  },
  mounted () {
    this.getNearby()
  },
  methods: {
    ...mapActions({
      getNearby: 'getNearby'
    })
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/css/common.scss';
.nearbyshop{
  @include num(100%,px2rem(50px));
  background: #00E546;
  p{
    @include num(100%,100%);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:0 px2rem(10px);
    span{
      color:#fff;
      flex:1;
      text-align: center;
      img{
        @include num(px2rem(14px),px2rem(20px));
      }
    }
  }
  ul{
    display: flex;
    flex-direction: column;
    li{
      @include num(100%,px2rem(70px));
      display: flex;
      align-items: center;
      a{
        @include num(100%,auto);
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
      }
    }
  }
}
</style>
