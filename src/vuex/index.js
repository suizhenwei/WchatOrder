import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
// import { MenuList } from '../mock/shop'
// import * as modules from './module'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    pageTitle: '',
    sum: 0,
    checkData: [],
    seller: {},
    goods: [],
    orderList: [],
    nearbyList: []
  },
  actions,
  mutations
  // modules
})
store.dispatch('initGoods')
export default store
