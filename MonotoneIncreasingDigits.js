/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
  const numberList = String(N).split('')
  let list = []
  for (let i = numberList.length - 1; i >=0; i--) {
    let current = numberList[i]
    if (i > 0) {
      const prev = numberList[i - 1]
      if (current < prev) {
        current = 9
        list.fill(9)
        numberList[i - 1] = prev - 1
      }
      if (Number(current) > -1) {
        list.unshift(current)
      }
    } else {
      if (Number(numberList[i]) > -1) {
        list.unshift(current)
      }
    }
  }
  return Number(list.join(''))
};

const number = monotoneIncreasingDigits(931212)
console.log(number)
