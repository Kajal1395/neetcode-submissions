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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        if (!head || left === right) return head;
        let index = 1;
        let dummy = new ListNode(-1);
        dummy.next = head;
        let curr = head;
        let leftPrev = dummy;
        while (index < left) {
            leftPrev = curr;
            curr = curr.next;
            index++;
        }
        let list1 = curr;
        while (index <= right) {
            curr = curr.next;
            index++;
        }
        let nextRight = curr;
        let count = right - left + 1;
        while (count > 0) {
            let nextEle = list1.next;
            list1.next = nextRight;
            nextRight = list1;
            list1 = nextEle;
            count--;
        }
        leftPrev.next = nextRight;
        return dummy.next;
    }
}
