/**
 *
 *
 * @param {*} func 需要延迟的函数
 * @param {*} delay 等待时间
 * @returns
 */
function debounce(func, delay) {
    let timeout
    return function() {
      clearTimeout(timeout) // 如果持续调用就清空定时器
      timeout = setTimeout(() => {
        func.apply(this, arguments)
      }, delay)
    }
}

export default debounce