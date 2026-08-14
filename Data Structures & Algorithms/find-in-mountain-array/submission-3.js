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
        let low = 0;
        let high = mountainArr.length() - 1;
        let ans = -1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
                low = mid + 1;
            } else {
                ans = mid;
                high = mid - 1;
            }
        }

        //binary search on left and right halves
        low = 0;
        high = ans;
        while (low <= high) {
            let newmid = Math.floor((low + high) / 2);
            if (target === mountainArr.get(newmid)) return newmid;
            if (mountainArr.get(newmid) < target) {
                low = newmid + 1;
            } else {
                high = newmid - 1;
            }
        }
        low = ans;
        high = mountainArr.length() - 1;
        while (low <= high) {
            let newmid = Math.floor((low + high) / 2);
            if (target === mountainArr.get(newmid)) return newmid;
            if (mountainArr.get(newmid) < target) {
                high = newmid - 1;
            } else {
                low = newmid + 1;
            }
        }
        return -1;
    }
}
