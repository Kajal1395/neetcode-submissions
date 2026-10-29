class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let count = 0;
        let n = 15;
        for (let x of details) {
            let age;
            age = Number(x.slice(11, 13));
            if (age > 60) {
                count++;
            }
        }
        return count;
    }
}
