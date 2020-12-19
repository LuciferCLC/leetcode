/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let codeS = 0
  let codeT = 0
  for (let i = 0; i < s.length; i++) {
    codeS += s.charCodeAt(i)
  }
  for (let i = 0; i < t.length; i++) {
    codeT += t.charCodeAt(i)
  }

  return String.fromCharCode(codeT - codeS)
};

console.log(findTheDifference('abcd', 'abcde'))
