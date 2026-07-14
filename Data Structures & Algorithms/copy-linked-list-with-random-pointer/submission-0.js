// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let dummy = new Node(-1);
        let newHead = dummy;
        let orig = head;
        let listMap = new Map();

        while (orig) {
            let newnode = new Node(orig.val);
            listMap.set(orig, newnode);
            newHead.next = newnode;
            newHead = newHead.next;
            orig = orig.next;
        }
        let list1 = head;
        let list2 = dummy.next;
        let copied=list2
        while (list1) {
            list2.random = listMap.get(list1.random);
            list1 = list1.next;
            list2 = list2.next;
        }
        return copied;
    }
}
