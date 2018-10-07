const calculate = (state, payLoad, calculates) => {
  state.goods.map((item, index) => {
    item.children.map((val, ind) => {
      if (payLoad === val.name) {
        if (!calculates) {
          val.count += 1
        } else {
          val.count -= 1
        }
      }
    })
  })
}
export {
  calculate
}
