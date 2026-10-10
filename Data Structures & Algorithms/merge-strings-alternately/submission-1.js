
class Solution {
    mergeAlternately(word1, word2) {
        let ind = 0;
        let word3 = "";

        while (ind < word1.length && ind < word2.length) {
            word3 += word1[ind];
            word3 += word2[ind];
            ind++;
        }

        while (ind < word1.length) {
            word3 += word1[ind];
            ind++;
        }

        while (ind < word2.length) {
            word3 += word2[ind];
            ind++;
        }

        return word3;
    }
}