/*
*  author suizhenwei
*  time   2018/9/25
*  work   封装全局的方法
*/
import Login from './fetcher'
export default {
  install (Vue) {
    Object.defineProperty(Vue.prototype, '$http', {
      writable: false,
      enumerable: false,
      configurable: false,
      value: Login
    })
  }
}
