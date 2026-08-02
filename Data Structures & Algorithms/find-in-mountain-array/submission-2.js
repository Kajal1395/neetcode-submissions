/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *     @param {number} index
 *     @return {number}
 *     get(index) {
 *         ...
 *     }
 *
 *     @return {number}
 *     length() {
 *         ...
 *     }
 * }
 */

class Solution {
    /**
     * @param {number} target
     * @param {MountainArray} mountainArr
     * @return {number}
     */
    findInMountainArray(target, mountainArr) {
        let n = mountainArr.length();
        if (n < 3) return -1;
        let low = 0;
        let high = n - 1;
        let ans = 0;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let value = mountainArr.get(mid);
            if (value < mountainArr.get(mid + 1)) {
                low = mid + 1;
            } else {
                ans = mid;
                high = mid - 1;
            }
        }
        let peak = low;
        low = 0;
        high = peak;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let value = mountainArr.get(mid);
            if (value === target) return mid;
            if (value < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        low = peak;
        high = n - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let value = mountainArr.get(mid);
            if (value === target) return mid;
            if (value < target) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return -1;
    }
}
