class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowsArr=Array.from({length:9},()=>Array(9).fill(0))
        let colsArr=Array.from({length:9},()=>Array(9).fill(0))
        let boxArr=Array.from({length:9},()=>Array(9).fill(0))
        for(let r=0;r<9;r++){
            for(let c=0;c<9;c++){

                if(board[r][c]==='.'){
                    continue
                }
                let val=board[r][c]-1
                if(rowsArr[r][val]===1){
                    return false
                }
                rowsArr[r][val]=1

                 if(colsArr[c][val]===1){
                    return false
                }
                colsArr[c][val]=1

                let boxIdx=3*Math.floor(r/3)+Math.floor(c/3)
                if(boxArr[boxIdx][val]===1){
                    return false
                }
                boxArr[boxIdx][val]=1
                
            }
        }
        return true
    }
}
