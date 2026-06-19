class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    frequencySort(nums) {
        let numMap = new Map();
        for (let num of nums) {
            numMap.set(num, (numMap.get(num) || 0) + 1);
        }
        let sorted = [...numMap.entries()].sort((a, b) => {
            if (a[1] !== b[1]) {
                return a[1]-b[1];
            }
            return b[0] - a[0];
        });

        console.log(sorted, "mapN");
        let res = [];
        for (let num of sorted) {
            console.log(num, "num");
            for (let i = 0; i < num[1]; i++) {
                res.push(num[0]);
            }
        }
        return res;
    }
}
