<template>
  <div class="order-top">
    <dl>
      <dt>
        <p>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537287045888&di=00dced70fc19e73902b061d262587008&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F73%2F44%2F01200000185370134376444869965_s.jpg" alt="">
        </p>
      </dt>
      <dd>
        <div>
          <h4 v-text="seller.name"></h4>
          <h6 v-text="seller.description"></h6>
        </div>
        <span @click="goTopDetail">
          <img src="../../assets/svg/箭头.svg" alt="">
        </span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    seller: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    goTopDetail () {
      this.$router.push('/shopdetail')
    }
  }
}
</script>
<style scoped lang="scss">
</style>
