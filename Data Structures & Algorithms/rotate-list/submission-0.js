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
    rotateRight(head, k) {
        let slow = head;
        let fast = head;
        let length = 1;
        let tail = head;
        while (tail.next) {
            tail = tail.next;
            length++;
        }
        k = k % length;
        if (k === 0) return head;
        let count = 0;

        while (count < k) {
            fast = fast.next;
            count++;
        }
        while (fast.next) {
            slow = slow.next;
            fast = fast.next;
        }
        let list2 = slow.next;
        slow.next = null;
        fast.next = head;
        return list2;
    }
}
