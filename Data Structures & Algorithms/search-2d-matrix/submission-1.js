class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length;
        let n = matrix[0].length;
        let low = 0;
        let high = m * n - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let row = Math.floor(mid / n);
            let col = Math.floor(mid % n);
            let value = matrix[row][col];
            if (value === target) return true;
            else if (value < target) low = mid + 1;
            else high = mid - 1;
        }
        return false;
        // TC: O(n * m);
        // let res = [];
        // for (let mat of matrix) {
        //     for (let ele of mat) {
        //         res.push(ele);
        //     }
        // }
        // let low = 0;
        // let high = res.length-1;
        // while (low <= high) {
        //     let mid = Math.floor((low + high) / 2);
        //     if (res[mid] === target) return true;
        //     else if (res[mid] < target) low = mid + 1;
        //     else high = mid - 1;
        // }
        // return false;
    }
}
