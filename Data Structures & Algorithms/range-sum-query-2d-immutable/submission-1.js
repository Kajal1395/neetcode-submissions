class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        let n = matrix.length;
        let m = matrix[0].length;
        this.prefixSumMat = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
        for (let r = 1; r < n + 1; r++) {
            for (let c = 1; c < m + 1; c++) {
                this.prefixSumMat[r][c] =
                    //we run one step ahead in prefix so we are 1 step behind in our matrix
                    matrix[r - 1][c - 1] +
                    this.prefixSumMat[r - 1][c] +
                    this.prefixSumMat[r][c - 1] -
                    this.prefixSumMat[r - 1][c - 1];
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        return (
            this.prefixSumMat[row2 + 1][col2 + 1] -
            this.prefixSumMat[row1][col2 + 1] -
            this.prefixSumMat[row2 + 1][col1] +
            this.prefixSumMat[row1][col1]
        );
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
