class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let n = arr.length;
        let res = [];
        //map me value and diff store
        let diff = [];
        for (let i = 0; i < n; i++) {
            diff.push([arr[i], Math.abs(x - arr[i])]);
        }
        let sortedDiff = diff.sort((a, b) => {
            if (a[1] === b[1]) {
                return a[0] - b[0];
            }
            return a[1] - b[1];
        });
        for (let i = 0; i < k; i++) {
            res.push(sortedDiff[i][0]);
        }
        return res.sort((a, b) => a - b);
    }
}
