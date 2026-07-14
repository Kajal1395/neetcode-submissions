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
        let carry = 0;
        let dummy = new ListNode(-1);
        let resList = dummy;
        while (l1 || l2 || carry) {
            let sum = carry;
            if (l1) {
                sum += l1.val;
                l1 = l1.next;
            }
            if (l2) {
                sum += l2.val;
                l2 = l2.next;
            }

            let digit = sum % 10;
            carry = Math.floor(sum / 10);
            let newNode = new ListNode(digit);
            resList.next = newNode;
            resList = newNode;  
        }
        return dummy.next;
    }
}
