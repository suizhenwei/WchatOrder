<template>
  <div class="quickPay">
    <yd-button size="large" type="primary" @click.native="show1 = true">确认付款</yd-button>
    <yd-keyboard title="" v-model="show1" :callback="done1" ref="keyboardDemo1"></yd-keyboard>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show1: false
    }
  },
  methods: {
    done1 (val) {
      console.log('输入的密码是：' + val)
      this.$dialog.loading.open('验证支付密码')
      setTimeout(() => {
        this.$refs.keyboardDemo1.$emit('ydui.keyboard.error', '对不起，您的支付密码不正确，请重新输入。')
        this.$dialog.loading.close()
      }, 2000)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/css/common.scss';
.quickPay{
  @include num(100%,100%);
  overflow: hidden;
}
</style>
