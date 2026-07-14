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
     * @param {ListNode} head
     * @return {number}
     */
    pairSum(head) {
        //split in two half
        let prev1 = null;
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            prev1 = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        let curr2 = slow;
        prev1.next = null;

        //reverse second half
        let prev2 = null;
        while (curr2) {
            let nextEle = curr2.next;
            curr2.next = prev2;
            prev2 = curr2;
            curr2 = nextEle;
        }

        let list1 = head;
        let list2 = prev2;

        //add list1 list2 and track maxSum
        let maxSum = -Infinity;
        while (list1 && list2) {
            maxSum = Math.max(list1.val + list2.val, maxSum);
            list1 = list1.next;
            list2 = list2.next;
        }

        return maxSum;
    }
}
