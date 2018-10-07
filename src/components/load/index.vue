<template>
  <div class="loading_container">
    <div class="load_img"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '../../assets/css/common.scss';
.loading_container {
  @include num(1rem,1rem);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.load_img{
  @include num(100%,100%);
  background: url('../../assets/img/animation.png') no-repeat 0px -150px;   /* 129*/
  background-size: cover;
  animation: load 1s ease-in-out infinite;
  position: absolute;
  z-index: 200;
}
@keyframes load {
  0% {
    transform: translateY(0px) scale(0.5)
  }
  50% {
    transform: translateY(-50px) scale(2)
  }
  100% {
    transform: translateY(0px) scale(0.5)
  }
}
</style>
