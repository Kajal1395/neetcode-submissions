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
     * @return {boolean}
     */
    isPalindrome(head) {
        let firstHead = head;
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let curr = slow;
        let prev = null;
        while (curr) {
            let nextNode = curr.next;
            curr.next = prev;
            console.log(curr, "ne", prev);
            prev = curr;
            curr = nextNode;
        }
        let secondhead = prev;
        console.log(secondhead, "secon");
        while (secondhead) {
            if (firstHead.val !== secondhead.val) {
                return false;
            }
            firstHead = firstHead.next;
            secondhead = secondhead.next;
        }
        return true;
    }
}
