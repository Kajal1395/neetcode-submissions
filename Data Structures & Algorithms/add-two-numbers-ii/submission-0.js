/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let list1 = l1;
        let list2 = l2;
        let s1 = [];
        let s2 = [];
        let tail = null;
        while (list1) {
            s1.push(list1.val);
            list1 = list1.next;
        }
        while (list2) {
            s2.push(list2.val);
            list2 = list2.next;
        }
        let carry = 0;
        while (s1.length || s2.length || carry) {
            let sum = carry;
            if (s1.length) {
                sum += s1.pop();
            }
            if (s2.length) {
                sum += s2.pop();
            }
             carry = Math.floor(sum / 10);
            let digit = sum % 10;
            let newNode = new ListNode(digit);
            newNode.next = tail;
            tail = newNode;
        }
        return tail;
    }
}
