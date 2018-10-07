// import fetcher from '@/utils/fetcher.js'
import { MenuList } from '../../../mock/shop.js'
export const newMenu = {
  namespaced: true,
  state: {
    goods: []
  },
  actions: {
    getData ({ commit }, payLoad) {
      commit('GETDATA', MenuList.goods)
    },
    change ({ commit }, payLoad) {
      commit('CHANGE', payLoad)
    },
    changes ({ commit }, payLoad) {
      commit('CHANGES', payLoad)
    }
  },
  mutations: {
    GETDATA (state, payLoad) {
      state.goods = payLoad
    },
    CHANGE (state, payLoad) {
      state.goods[payLoad.nav].children[payLoad.num].count = 1
    },
    CHANGES (state, payLoad) {
      if (payLoad.str === 'add') {
        state.goods[payLoad.nav].children[payLoad.num].count += 1
      } else {
        state.goods[payLoad.nav].children[payLoad.num].count -= 1
      }
    }
  }
}
