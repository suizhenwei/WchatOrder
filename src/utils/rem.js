/**
 *   auther suizhenwei
 *   work   封装全局的rem规范
 *   import 在main.js中 import'rem' 挂载
 */
import { getScreenWidth, getRem } from './font'
(function (doc, win) {
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  const recalc = () => {
    const docEl = document.documentElement
    const clientWidth = getScreenWidth()
    if (!clientWidth) { return }
    docEl.style.fontSize = `${getRem()}px`
  }

  if (!doc.addEventListener) { return }
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
