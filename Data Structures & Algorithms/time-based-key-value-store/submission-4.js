class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let keyArr = this.keyStore.get(key);
        let ans = "";
        let n = keyArr && keyArr.length;
        if (n < 1) return ans;
        let low = 0;
        let high = n - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (keyArr[mid][1] <= timestamp) {
                ans = keyArr[mid][0];
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return ans;
    }
}
