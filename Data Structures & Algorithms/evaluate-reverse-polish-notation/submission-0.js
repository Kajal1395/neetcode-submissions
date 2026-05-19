class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for (let x of tokens) {
            if (x === "+" || x === "-" || x === "/" || x === "*") {
                if (stack.length > 0) {
                    let a = Number(stack.pop());
                    let b = Number(stack.pop());
                    if (x === "-") {
                        stack.push(b - a);
                    }
                    if (x === "+") {
                        stack.push(b + a);
                    }
                    if (x === "*") {
                        stack.push(b * a);
                    }
                    if (x === "/") {
                        stack.push(Math.trunc(b / a));
                    }
                }
            } else {
                stack.push(x);
            }
        }
        return stack.length && stack.pop();
    }
}
