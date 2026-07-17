class ListNode {
    constructor(val, next = null, prev = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        let prev = null;
        let curr = this.head;
        let pos = 0;
        while (pos < index) {
            prev = curr;
            curr = curr.next;
            pos++;
        }
        return prev;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.size) return -1;
        let curr = this.head;
        let pos = 0;
        while (curr && pos < index) {
            curr = curr.next;
            pos++;
        }
        return curr.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        let newNode = new ListNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        let newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.size++;
            return;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.size++;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index < 0) index = 0;

        if (index > this.size) return;
        let newNode = new ListNode(val);
        let curr = this.head;
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            this.size++;
            return;
        }
        let pos = 0;
        curr = this.head;
        if (index === this.size) {
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
            this.size++;
        } else {
            while (curr) {
                if (pos === index - 1) {
                    let newnextEle = curr.next;
                    curr.next = newNode;
                    newNode.next = newnextEle;
                    this.size++;
                    break;
                }
                curr = curr.next;
                pos++;
            }
        }
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) return;
        if (index === 0) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        let curr = this.head;
        let pos = 0;

        curr = this.head;
        if (index <= this.size) {
            while (curr) {
                if (pos === index - 1) {
                    curr.next = curr.next.next;
                    this.size--;
                    return;
                }
                curr = curr.next;
                pos++;
            }
        }
    }
}
