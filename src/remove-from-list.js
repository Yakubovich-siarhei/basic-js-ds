const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
function removeKFromList( l, k ) {
  let newEl = l
  let curn = newEl.next

  newEl.value === k ? l = curn : null

  for(curn;  curn.next !== null; ) {
    if(curn.value !== k) {
      newEl = curn
      curn = curn.next
    } else {
      newEl.next = curn.next
      curn = curn.next
    }
  }

  curn.value === k ? newEl.next = null : null

  return l
}

module.exports = {
  removeKFromList
};
