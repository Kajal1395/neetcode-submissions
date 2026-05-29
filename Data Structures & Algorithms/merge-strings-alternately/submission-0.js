class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let str=''
        let len=Math.min(word1.length,word2.length)
        let k=0
        while(k<len){
            str+=word1[k]+word2[k]
            k++
        }
        if(k<word1.length){
            str+=word1.slice(k,word1.length)
        }
        if(k<word2.length){
            str+=word2.slice(k,word2.length)
        }
        return str
    }
}
