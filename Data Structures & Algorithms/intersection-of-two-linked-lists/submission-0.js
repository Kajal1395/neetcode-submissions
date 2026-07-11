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
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
    getIntersectionNode(headA, headB) {
        let list1 = headA;
        let list2 = headB;
        while (list1 !== list2) {
            list1 = list1 ? list1.next : headB;
            list2 = list2 ? list2.next : headA;
        }
        return list1;
    }
}
