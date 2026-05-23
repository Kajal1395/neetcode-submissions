class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const oper = ["+", "C", "D"];
        let stack = [];

        let score = 0;
        for (let i = 0; i < operations.length; i++) {
            if (oper.includes(operations[i])) {
                if (operations[i] === "+") {
                    if (stack.length > 0) {
                        let a = stack[stack.length - 1];
                        let b = stack[stack.length - 2];
                        let val = a + b;
                        stack.push(val);
                        score += val;
                    }
                } else if (operations[i] === "C") {
                    if (stack.length > 0) {
                        let removed = stack.pop();
                        score -= removed;
                    }
                } else if (operations[i] === "D") {
                    if (stack.length > 0) {
                        let val = stack[stack.length - 1] * 2;
                        stack.push(val);
                        score += val;
                    }
                }
            } else {
                let val = Number(operations[i]);
                stack.push(val);
                score += val;
            }
        }
        return score;
    }
}
