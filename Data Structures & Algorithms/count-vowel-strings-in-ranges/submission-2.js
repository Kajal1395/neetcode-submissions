class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    vowelStrings(words, queries) {
        let res = [];

        let vowels = new Set(["a", "e", "i", "o", "u"]);
        let prefixSum = Array.from({length:words.length + 1}).fill(0);
        let temp = [];
        for (let j = 0; j < words.length; j++) {
            if (vowels.has(words[j][0]) && vowels.has(words[j][words[j].length - 1])) {
                temp.push(1);
            } else {
                temp.push(0);
            }
        }
         
        //[0,1,1,2,3,4], temp=[1,0,1,1,1]
        for (let i = 0; i < words.length; i++) {
            prefixSum[i + 1] = Number(prefixSum[i]) + Number(temp[i]);
        }

        for (let [left, right] of queries) {
            res.push(prefixSum[right + 1] - prefixSum[left]);
        }
        return res;

        // let res = [];
        // for (let i = 0; i < queries.length; i++) {
        //     let temp = [];
        //     let count = 0;
        //     let vowels = ["a", "e", "i", "o", "u"];
        //     for (let j = queries[i][0]; j <= queries[i][1]; j++) {
        //         if (
        //             vowels.includes(words[j][0]) &&
        //             vowels.includes(words[j][words[j].length - 1])
        //         ) {
        //             temp.push(words[j]);
        //             count++;
        //         }
        //     }
        //     res.push(count);
        // }
        // return res;
    }
}
