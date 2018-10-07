import Vue from 'vue'
import Router from 'vue-router'
const List = (resolve) => require(['@/containers/newMenu'], resolve)
const ShopDetail = (resolve) => require(['@/containers/shopDetail'], resolve)
const MyOrder = (resolve) => require(['@/containers/MyOrder'], resolve)
const QuickPay = (resolve) => require(['@/containers/quickPay'], resolve)
const Nearbyshop = (resolve) => require(['@/containers/nearbyshop'], resolve)
const Nearbyshops = (resolve) => require(['@/containers/nearbyshop/nearbyshop'], resolve)
const MapShop = (resolve) => require(['@/containers/nearbyshop/mapShop'], resolve)
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/newMenu'
    },
    {
      path: '/newMenu',
      name: 'List',
      meta: {
        title: '新菜单'
      },
      component: List
    },
    {
      path: '/shopdetail',
      meta: {
        title: '商家详情'
      },
      component: ShopDetail
    },
    {
      path: '/myorder',
      component: MyOrder
    },
    {
      path: '/quickPay',
      component: QuickPay
    },
    {
      path: '/nearbyshop',
      component: Nearbyshop,
      redirect: '/nearbyshop/nearbyshops',
      children: [
        {
          path: 'nearbyshops',
          name: 'nearbyshops',
          component: Nearbyshops
        },
        {
          path: 'mapShop',
          name: 'mapShop',
          component: MapShop
        }
      ]
    }
    // children: [{
    //   path: '',
    //   redirect: '/newMenu'
    // }, {
    //   path: '/menu',
    //   component: Menu
    // }, {
    //   path: '/register',
    //   component: Register
    // }, {
    //   path: '/myorder',
    //   component: MyOrder
    // }, {
    //   path: '/shopdetail',
    //   component: ShopDetail
    // }, {
    //   path: '/nearbyshop',
    //   component: NearbyShop,
    //   children: [{
    //     path: 'mapshop',
    //     component: MapShop
    //   }],
    // }, {
    //   path: '/myaddress',
    //   name: 'MyAddress',
    //   component: MyAddress,
    //   children: [{
    //     path: 'addaddress',
    //     name: 'AddAddress',
    //     component: AddAddress
    //   }],
    // }, {
    //   path: '/newMenu',
    //   component: NewMenu
    // }, {
    //   path: '/hallFoodOrderDetail',
    //   component: HallFoodOrderDetail
    // }, {
    //   path: '/deliveryOrderDetail',
    //   component: DeliveryOrderDetail
    // }, {
    //   path: '/reserveOrderDetail',
    //   component: ReserveOrderDetail
    // }, {
    //   path: '/pickUpOrderDetail',
    //   component: PickUpOrderDetail
    // }, {
    //   path: '/quickPay',
    //   component: QuickPay
    // }, {
    //   path: '/fooddetail',
    //   component: FoodDetail
    // }, {
    //   path: '/*',
    //   component: NotFound
    // }]
  ]
})

export default router
