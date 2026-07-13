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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        //I can reverse move 0 to n-1 and remove n-1, reverse back
        //other approach with two ptr fast and slow having gap of n
        //once fast reach end slow is n behind from tail so we can remove nth element
        let dummy = new ListNode(-1);
        dummy.next = head;
        let slow = dummy;
        let fast = dummy;
        let count = 0;
        while (count <= n) {
            fast = fast.next;
            count++;
        }
        while (fast) {
            slow = slow.next;
            fast = fast.next;
        }
        slow.next = slow.next.next;

        return dummy.next;
    }
}
