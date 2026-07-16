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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        if(!head || k===1) return head
        let dummy = new ListNode(-1);
        dummy.next = head;
        let groupPrev = dummy;
        let length = 1;
        let tail = head;
        while (tail.next) {
            tail = tail.next;
            length++;
        }
        let countK = Math.floor(length / k);
        let curr = head;
        while (countK > 0) {
            let before = curr;
            let index = 1;
            let prev = null;
            while (index <= k) {
                let nextEle = curr.next;
                curr.next = prev;
                prev = curr;
                curr = nextEle;
                index++;
            }
            groupPrev.next = prev;
            groupPrev = before;
            before.next = curr;
            // newHead = curr;
            countK--;
        }
        while (curr) {
            curr = curr.next;
        }

        return dummy.next;
    }
}
