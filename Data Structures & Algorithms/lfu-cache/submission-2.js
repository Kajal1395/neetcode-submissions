class Node {
    constructor(key, value, freq = 1, prev = null, next = null) {
        this.key = key;
        this.value = value;
        this.freq = freq;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = new Node(-1);
        this.tail = new Node(-1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.head.prev = null;
        this.tail.next = null;
    }

    remove(node) {
        let before = node.prev;
        let after = node.next;
        before.next = after;
        after.prev = before;
        node.next = null;
        node.prev = null;
    }
    addToTail(node) {
        let previous = this.tail.prev;
        previous.next = node;
        node.next = this.tail;
        node.prev = previous;
        this.tail.prev = node;
    }
    removeFromHead() {
        let node = this.head.next;
        this.remove(node);
        return node;
    }
}

class LFUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.keyNode = new Map();
        this.freqDll = new Map();
        this.size = 0;
        this.minFreq = 0;
    }
    addNewNode(key, value) {
        let node = new Node(key, value);
        this.keyNode.set(key, node);
        this.size++;

        if (!this.freqDll.has(node.freq)) {
            this.freqDll.set(node.freq, new DoublyLinkedList());
        }
        let nodelist = this.freqDll.get(node.freq);
        nodelist.addToTail(node);
        this.minFreq = 1;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.keyNode.has(key)) {
            return -1;
        } else {
            let node = this.keyNode.get(key);
            //remove node from old
            //update nodefreq and minfreq
            //add node to new nodefreq list at tail

            let oldfreq = node.freq;

            let nodelist = this.freqDll.get(node.freq);
            nodelist.remove(node);

            if (oldfreq === this.minFreq && nodelist.head.next === nodelist.tail) {
                this.minFreq++;
            }

            node.freq++;
            if (!this.freqDll.has(node.freq)) {
                this.freqDll.set(node.freq, new DoublyLinkedList());
            }
            let newfreqlist = this.freqDll.get(node.freq);
            newfreqlist.addToTail(node);

            return node.value;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     */
    put(key, value) {
        if (this.capacity === 0) return;
        if (this.keyNode.has(key)) {
            //just update key value
            let node = this.keyNode.get(key);
            node.value = value;
            let oldfreq = node.freq;
            let nodelist = this.freqDll.get(node.freq);
            nodelist.remove(node);
            if (oldfreq === this.minFreq && nodelist.head.next === nodelist.tail) {
                this.minFreq++;
            }

            node.freq++;
            if (!this.freqDll.has(node.freq)) {
                this.freqDll.set(node.freq, new DoublyLinkedList());
            }
            let newfreqlist = this.freqDll.get(node.freq);
            newfreqlist.addToTail(node);
        } else {
            if (this.size < this.capacity) {
                //there is capacity and key doent exist so just add the key value
                //insert the new node
                this.addNewNode(key, value);
            } else {
                //new node,capacity exceeds,need eviction logic here
                let minFreqList = this.freqDll.get(this.minFreq);
                let removedNode = minFreqList.removeFromHead();
                this.keyNode.delete(removedNode.key);
                this.size--;
                //insert the new node
                this.addNewNode(key, value);
            }
        }
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
