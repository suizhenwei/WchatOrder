<template>
  <div class="sshop">
    <div class="mapShop">
      <p>
        <span style="text-align:left;" @click="goBack"><img src="../../assets/svg/右箭头.svg" alt=""></span>
        <span>附近的店</span>
        <span></span>
      </p>
    </div>
    <!-- <iframe
      width="100%"
      height="100%"
      :src="url">
    </iframe> -->
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  mounted () {
    /* eslint-disable no-unused-vars */
    const location = this.$route.params.location.location
    const center = new qq.maps.LatLng(location.lat, location.lng)
    const map = new qq.maps.Map(document.getElementById('container'), {
      center: center,
      zoom: 16
    })
    const marker = new qq.maps.Marker({
      position: center,
      map: map
    })
  },
  computed: {
    // url () {
    //   return `https://apis.map.qq.com/tools/geolocation?type=0&marker=coord:${this.$route.params.location.lat},${this.$route.params.location.lng};title:北京天安门;addr:北京市内&key=JS3BZ-TW4R4-HC4UE-XH44W-GGGB7-ICF3V&referer=myapp`;
    // }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/css/common.scss';
.mapShop{
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
}
.sshop{
  @include num(100%, 100%);
}
#container{
  @include num(100%,100%);
}
</style>
