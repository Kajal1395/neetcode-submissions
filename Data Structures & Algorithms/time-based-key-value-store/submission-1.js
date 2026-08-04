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
        let keyVal = this.keyStore.get(key);
        if (!keyVal) {
            keyVal = [];
            this.keyStore.set(key, keyVal);
        }
        keyVal.push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let ans = "";
        let keyVal = this.keyStore.get(key);
        let low = 0;
        let high = keyVal.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (keyVal[mid][1] <= timestamp) {
                ans = keyVal[mid][0];
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return ans;
    }
}
