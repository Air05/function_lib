/**
 *
 *  JS节流函数，用途限制一段时间的调用频率
 * @param {*} func
 * @param {*} delay
 * @returns
 */
function throttle(func, delay) {
  let run = true  //定义一个锁 标志位
  return function () {
    if (!run) {
      return
    }
    run = false;
    setTimeout(() => {
      func.apply(this, arguments)
      run = true
    }, delay)
  }
}

export default throttle