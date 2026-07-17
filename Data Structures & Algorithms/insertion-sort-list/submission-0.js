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
     * @return {ListNode}
     */
    insertionSortList(head) {
        let dummy = new ListNode(-1);
        dummy.next = head;
        let curr = head.next;
        let unsortedPrev = head;

        while (curr) {
            if (curr.val >= unsortedPrev.val) {
                unsortedPrev = curr;
                curr = curr.next;
                continue;
            }
            let prev = dummy;
            let temp = dummy.next;
            while (curr.val >= temp.val) {
                prev = temp;
                temp = temp.next;
            }

            let nextEle = curr.next;
            prev.next = curr;
            curr.next = temp;
            curr = nextEle;
            unsortedPrev.next = nextEle;
        }

        return dummy.next;
    }
}
