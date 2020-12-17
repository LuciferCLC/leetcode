/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const list = s.split(' ')

  if (list.length !== pattern.length) return false

  const map = {}

  for (let i = 0; i < pattern.length; i++) {
    const p = pattern.charAt(i)
    if (map[p] && map[p] !== list[i]) return false
    if (!map[p] && Object.values(map).includes(list[i])) return false
    map[p] = list[i]
  }
  return true
};

const p = 'ab'
const s = 'a a'
console.log(wordPattern(p, s))
