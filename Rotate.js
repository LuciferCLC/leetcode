/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

  const _rotate = (m, index) => {
    const length = m.length
    for (let i = index; i < length - 1 - index; i++) {
      [
        m[index][i],
        m[i][length - 1 - index],
        m[length - 1 - index][length - 1 - i],
        m[length - 1 - i][index],
      ] = [
        m[length - 1 - i][index],
        m[index][i],
        m[i][length - 1 - index],
        m[length - 1 - index][length - 1 - i],
      ]
    }

    if ((length - (index + 1) * 2) >= 2) {
      _rotate(m, index + 1)
    }
  }

  _rotate(matrix, 0)

  return matrix
};

const matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
// const matrix = [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ]
console.log(rotate(matrix))
