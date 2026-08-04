class ListNode {
    constructor(key, value, next = null, prev = null) {
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
        this.head = new ListNode(0, 0);
        this.tail = new ListNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    remove(node) {
        let before = node.prev;
        let next = node.next;
        before.next = next;
        next.prev = before;
    }

    insertAtMRU(node) {
        let prev = this.tail.prev;
        node.prev = prev;
        node.next = this.tail;

        prev.next = node;
        this.tail.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }
        let node = this.cache.get(key);
        this.remove(node);
        this.insertAtMRU(node);
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let node = new ListNode(key, value);
        if (this.cache.has(key)) {
            this.cache.set(this.cache.get(key), node);
            let cachenode = this.cache.get(key);
            this.remove(cachenode);
            this.insertAtMRU(cachenode);
        } else {
            this.cache.set(key, node);
            this.insertAtMRU(node);
        }
        if (this.cache.size > this.capacity) {
            let lru = this.head.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}
