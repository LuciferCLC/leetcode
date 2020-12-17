/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const obj = {}

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i]
    const sortStr = [...str].sort().join('')

    if (obj[sortStr]) {
      obj[sortStr].push(str)
    } else {
      obj[sortStr] = [str]
    }

  }
  // strs.forEach((str) => {
  //   const sortStr = str.split('').sort().join('')
  //
  //   if (obj[sortStr]) {
  //     obj[sortStr].push(str)
  //   } else {
  //     obj[sortStr] = [str]
  //   }
  // })

  return Object.values(obj)
}

const arr = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
console.log(arr)
