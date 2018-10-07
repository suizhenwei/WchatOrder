import { MenuList } from '@/mock/shop.js'
import {
  menu2Storage,
  menuInStorage,
  assignMenus
} from '@/utils'
export default {
  init ({dispatch}) {
    dispatch('initGoods')
    dispatch('initShopCar')
  },
  initShopCar () {
    console.log('initShopCar')
  },
  initGoods ({ commit }) {
    if (!localStorage.getItem('menu')) {
      commit('INITGOODS', MenuList)
    } else {
      const result = assignMenus(MenuList.goods, JSON.parse(localStorage.getItem('menu')))
      MenuList.goods = result
      commit('INITGOODS', MenuList)
    }
  },
  // 获取菜单数据
  getData ({ commit }, payLoad) {
    commit('GETDATA', MenuList.goods)
  },
  // 获取订单页数据
  getList ({ commit }, payLoad) {
    const list = localStorage.getItem('menu')
    commit('GETLIST', JSON.parse(list))
  },
  // 附近的店数据
  async getNearby ({ commit }, payLoad) {
    // let data = require('../mock/liat.json');
    const data = await fetch(`http://47.94.7.105:8082/api/location?lat=40.041980&lng=116.300151`, {}).then(res => {
      const json = res.json()
      return json
    }).then(json => {
      return json.result
    })
    commit('GETNEARBY', data)
  },
  // 切换点击按钮
  change ({ commit }, payLoad) {
    commit('CHANGE', payLoad)
  },
  // 加减按钮，添加本地存储
  changes ({ commit, state }, payLoad) {
    commit('CHANGES', payLoad)
    menuInStorage(menu2Storage(state.goods, payLoad.str))
  },
  // 购物车数据
  shopCar ({ commit }, payLoad) {
    commit('SHOPCAR', payLoad)
  }
}
