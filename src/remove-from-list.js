const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  class ListNode {
       constructor(x) {
         this.value = x;
         this.next = null;
       }
     }
  let result = [];
  let resultList;
  let l_arr = Array.from(l);
  let k_arr = Array.from(k);
  l_arr = l_arr.sort();
  k_arr = k_arr.sort();
  result = l_arr.filter(x => !k_arr.includes(x));
  result = new Set(result);

  function convertArrayToList(result) {
      result.forEach((element) => {
      // this.node = new ListNode(element);
      // this.next = next;
      // console.log(element);
      resultList = new ListNode(element)
    }  
      )}
    
  // console.log(resultList + " resultList");
  resultList = convertArrayToList(result);
  console.log(convertArrayToList(result));
  // console.log(resultList);
  return resultList;
}

// module.exports = {
//   removeKFromList
// };

console.log(removeKFromList([3, 1, 2, 3, 4, 5],[1, 2, 4, 5]))