<template>
  <div class="order">
    <menu-top :seller="seller"></menu-top>
    <menu-list :goods="goods"></menu-list>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../../components/car'
import menuTop from './menuTop'
import menuList from './menuList'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      pageNum: 0,
      listHeight: [],
      scrolly: 0
    }
  },
  components: {
    'menu-top': menuTop,
    'menu-list': menuList,
    Footer
  },
  computed: {
    ...mapState({
      seller: state => state.seller,
      goods: state => state.goods
    })
  },
  methods: {
    goTopDetail () {
      this.$router.push('/shopdetail')
    }
  }
}
</script>
<style lang="scss">
</style>
