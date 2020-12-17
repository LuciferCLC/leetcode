/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let list = []
  let count = 0
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i)
    const index = list.indexOf(c)
    if (index > -1) {
      count = list.length > count ? list.length : count
      list.push(c)
      list = list.slice(index + 1)
    } else {
      list.push(c)
    }
  }

  return list.length > count ? list.length : count
}

console.log(lengthOfLongestSubstring('pwwkew'))
