class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let count = 0;
        let left = 0;
        let right = 0;
        let sum = 0;
        let n = arr.length;
        while (right < n) {
            sum += arr[right];
            if (right - left + 1 > k) {
                sum -= arr[left];
                left++;
            }

            if (right - left + 1 === k && Math.floor(sum / k) >= threshold) {
                count++;
            }

            right++;
        }
        return count;
        // let count = 0;
        // for (let i = 0; i <= arr.length - k; i++) {
        //     let sum = arr.slice(i, i + k).reduce((num, acc) => num + acc, 0);
        //     if (Math.floor(sum / k) >= threshold) {
        //         count++;
        //     }
        // }
        // return count;
    }
}
