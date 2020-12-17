/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length === 1) return s;

  const func = (lastIndex, lastStr, lastJ = s.length - 1) => {
    let start = []
    let end = []
    let j = lastJ

    for (let i = lastIndex; i < s.length; i++) {
      const ci = s.charAt(i)

      for (; j >= 0; j--) {
        const cj = s.charAt(j)

        if (i === j) {
          if (end.length > 0) {
            start.push(ci)
            const newStr = [...start, ...end].join('')
            const str = newStr.length > lastStr.length ? newStr: lastStr
            return func(lastIndex + 1, str)
          } else {
            return func(lastIndex + 1, lastStr)
          }
        } else if (i > j) {
          const newStr = [...start, ...end].join('')
          const str = newStr.length > lastStr.length ? newStr: lastStr
          return func(lastIndex + 1, str)
        } else {
          if (ci === cj) {
            start.push(ci)
            end.unshift(cj)
            j--
            break;
          } else {
            if (end.length > 0) {
              start = []
              end = []
              return func(lastIndex, lastStr, lastJ - 1)
            }
          }
        }
      }
    }
    const newStr = [...start, ...end].join('')
    const str = newStr.length > lastStr.length ? newStr : lastStr
    if (!str) return s.charAt(0)
    return str
  }

  return func(0, '')
};

const str1 = 'thatfromthesehonoreddeadwetakeincreaseddevotisapldkaasd;lksad;jsaadfljktisapldkaasdljsaadfljktisapljsaadflas'
// const str1 = 'aabab'
console.log(longestPalindrome(str1))
