// 获取到屏幕的宽度
const getScreenWidth = () => window.screen.width
// 获取rem值
const getRem = () => getScreenWidth() / 10
// 得到相对于页面的字体rem
const px2rem = (px) => px / getRem()
export {
  getScreenWidth,
  getRem,
  px2rem
}
