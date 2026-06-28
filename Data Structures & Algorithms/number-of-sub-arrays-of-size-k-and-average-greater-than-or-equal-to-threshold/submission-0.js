class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let count = 0;
        for (let i = 0; i <= arr.length - k; i++) {
            let sum = arr.slice(i, i + k).reduce((num, acc) => num + acc, 0);
            if (Math.floor(sum / k) >= threshold) {
                count++;
            }
        }
        return count;
    }
}
