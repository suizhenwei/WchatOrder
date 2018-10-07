/**
 *  author suizhenwei
 *  function 做本地存储的 需要的东西
 *  time   2018-9-28
 */
const menu2Storage = (menus, menu) => {
  let o = {}
  menus.map((item, key) => {
    item.children.map((i, k) => {
      if (i.name === menu) {
        o[i.name] = [i.count, i.price]
      }
    })
  })
  return o
}

const menuInStorage = (menus) => {
  if (!localStorage.getItem('menu')) {
    localStorage.setItem('menu', JSON.stringify(menus))
    return menus
  } else {
    const oResult = JSON.parse(localStorage.getItem('menu'))
    Object.assign(oResult, menus)
    localStorage.setItem('menu', JSON.stringify(oResult))
    return oResult
  }
}

// 将接口的menus数据跟本地存储的数据合并，打到购物车的效果
const assignMenus = (menuList, storeMenu) => {
  menuList.forEach((item, key) => {
    item.children.forEach((menu, k) => {
      if (Object.keys(storeMenu).includes(menu.name)) {
        menu.count = storeMenu[menu.name][0]
      }
    })
  })
  return menuList
}
export {
  menu2Storage,
  menuInStorage,
  assignMenus
}
