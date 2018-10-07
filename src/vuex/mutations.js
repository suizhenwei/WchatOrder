import {
  GETDATA,
  CHANGE,
  CHANGES,
  SHOPCAR,
  GETLIST,
  GETNEARBY
} from './mutation_type'
import {
  calculate
} from '../utils/cutAdd'
const mutations = {
  INITGOODS (state, payLoad) {
    state.seller = payLoad.seller
    state.goods = payLoad.goods
  },
  [GETDATA] (state, payLoad) {
    state.goods = payLoad
  },
  [GETLIST] (state, payLoad) {
    state.orderList = payLoad
  },
  [GETNEARBY] (state, payLoad) {
    state.nearbyList = payLoad
  },
  [CHANGE] (state, payLoad) {
    calculate(state, payLoad.name)
  },
  [CHANGES] (state, payLoad) {
    if (payLoad.control === 'add') {
      calculate(state, payLoad.str)
    } else {
      calculate(state, payLoad.str, 'cut')
    }
  },
  [SHOPCAR] (state, payLoad) {
    const data = []
    let sums = 0
    state.goods.map((item, index) => {
      item.children.map((val, ind) => {
        if (val.count !== 0) {
          data.push(val)
          sums += val.price * val.count * 1
        }
      })
    })
    state.checkData = data
    state.sum = sums
  }
}
export default mutations
