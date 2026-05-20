class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let n = temperatures.length;
        let res = [];
        let stack = [];
        for (let i = n - 1; i >= 0; i--) {
            if (stack.length > 0) {
                while (temperatures[stack[stack.length - 1]] <= temperatures[i]) {
                    stack.pop();
                }
            }
            if (stack.length <= 0) {
                res[i] = 0;
            } else {
                res[i] = stack[stack.length - 1] - i;
            }
            stack.push(i);
        }

        return res;

        // let n = temperatures.length;
        // let res = [];
        // let stack = [];
        // for (let i = n - 1; i >= 0; i--) {
        //     while (stack.length > 0 && stack[stack.length - 1][0] <= temperatures[i]) {
        //         stack.pop();
        //     }
        //     if (stack.length <= 0) {
        //         res[i] = 0;
        //     } else {
        //         res[i] = Number(stack[stack.length - 1][1] - i);
        //     }
        //     stack.push([temperatures[i], i]);
        // }

        // return res;

        // let n = temperatures.length;

        // let res = [];
        // for (let i = 0; i < n; i++) {
        //     let count = 0;
        //     for (let j = i + 1; j < n; j++) {
        //         if (temperatures[j] > temperatures[i]) {
        //             count = j - i;
        //             break
        //         }
        //     }
        //     res.push(count);
        // }
        // return res
    }
}
