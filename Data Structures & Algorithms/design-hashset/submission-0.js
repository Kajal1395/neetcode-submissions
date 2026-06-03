class MyHashSet {
    constructor() {
        this.hashSet = {};
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.hashSet[key] = true;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        if (this.hashSet[key] !== undefined) {
            delete this.hashSet[key];
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        if (this.hashSet[key] !== undefined) {
            return true;
        }
        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
