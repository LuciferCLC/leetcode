/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const newNums = [...nums1, ...nums2].sort((a, b) => a - b)
  const index = Math.floor(newNums.length / 2)
  if (newNums.length % 2 === 0) {
    return (newNums[index] + newNums[index - 1]) /2
  }
  return newNums[index]
};
