class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    vowelStrings(words, queries) {
        let res = [];
        for (let i = 0; i < queries.length; i++) {
            let temp = [];
            let count = 0;
            let vowels = ["a", "e", "i", "o", "u"];
            for (let j = queries[i][0]; j <= queries[i][1]; j++) {
                if (
                    vowels.includes(words[j][0]) &&
                    vowels.includes(words[j][words[j].length - 1])
                ) {
                    temp.push(words[j]);
                    count++;
                }
            }
            console.log(temp, "temp");
            res.push(count);
        }
        console.log(res, "result");
        return res;
    }
}
