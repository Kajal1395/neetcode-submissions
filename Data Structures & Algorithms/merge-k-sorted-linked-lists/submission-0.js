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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) return null;
        function mergeList(list1, list2) {
            let dummy = new ListNode(-1);
            let temp = dummy;
            while (list1 && list2) {
                if (list1.val <= list2.val) {
                    temp.next = list1;
                    temp = list1;
                    list1 = list1.next;
                } else {
                    temp.next = list2;
                    temp = list2;
                    list2 = list2.next;
                }
            }
            if (list1) {
                temp.next = list1;
            } else {
                temp.next = list2;
            }
            return dummy.next;
        }

        let count = lists.length;
        while (count > 1) {
            let write = 0;
            for (let i = 0; i + 1 < count; i += 2) {
                lists[write] = mergeList(lists[i], lists[i + 1]);
                write++;
            }
            if (count % 2 === 1) {
                lists[write] = lists[count - 1];
                write++;
                console.log(write);
            }
            count = write;
        }
        return lists[0];
    }
}
