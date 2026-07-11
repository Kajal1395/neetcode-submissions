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
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
        let dummy = new ListNode(-1);
        let prev = dummy;
        dummy.next = head;
        let curr = head;
        while (curr) {
            if (curr.val === val) {
                console.log(prev, "prev", curr);
                prev.next = curr.next;
                curr = curr.next;
            } else {
                prev = curr;
                curr = curr.next;
            }
        }
        return dummy.next;
    }
}
