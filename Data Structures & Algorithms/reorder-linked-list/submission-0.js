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
     * @return {void}
     */
    reorderList(head) {
        let curr1 = head;
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let curr2 = slow.next;
        slow.next = null;
        let prev = null;
        while (curr2) {
            let nextEle = curr2.next;
            curr2.next = prev;
            prev = curr2;
            curr2 = nextEle;
        }

        let list1 = head;
        let list2 = prev;
        console.log(list1, "list1", list2);
        while (list1 && list2) {
            let list1_next = list1.next;
            let list2_next = list2.next;
            list1.next = list2;
            list2.next = list1_next;
            list1 = list1_next;
            list2 = list2_next;
        }
        return list1;
    }
}
