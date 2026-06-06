class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        //brute force
        //check rows
        for (let r = 0; r < 9; r++) {
            let st = new Set();
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === ".") continue;
                if (st.has(board[r][c])) {
                    return false;
                }
                st.add(board[r][c]);
            }
        }

        //check cols
        for (let c = 0; c < 9; c++) {
            let st = new Set();
            for (let r = 0; r < 9; r++) {
                if (board[r][c] === ".") continue;
                if (st.has(board[r][c])) {
                    return false;
                }
                st.add(board[r][c]);
            }
        }

        function traversal(board, sr, er, sc, ec) {
            let st = new Set();
            for (let r = sr; r <= er; r++) {
                for (let c = sc; c <= ec; c++) {
                    if (board[r][c] === ".") continue;
                    if (st.has(board[r][c])) {
                        return false;
                    }
                    st.add(board[r][c]);
                }
            }
            return true;
        }

        //check the box
        for (let r = 0; r < 9; r += 3) {
            let er = r + 2;
            for (let c = 0; c < 9; c += 3) {
                let ec = c + 2;
                if (!traversal(board, r, er, c, ec)) {
                    return false;
                }
            }
        }

        return true;
    }
}
