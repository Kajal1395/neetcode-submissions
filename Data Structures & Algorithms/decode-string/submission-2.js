class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stack = [];
        for (let i = 0; i < s.length; i++) {
            if (stack.length > 0 && s[i] === "]") {
                let val = "";
                while (stack[stack.length - 1] !== "[") {
                    let popped = stack.pop();
                    val = popped + val;
                }
                stack.pop();
                let digit = stack.pop();
                while (!isNaN(stack[stack.length - 1])) {
                    digit = stack.pop() + digit;
                }
                console.log(digit, "digit");
                while (digit !== 0) {
                    stack.push(val);
                    digit--;
                }
                continue;
            }
            stack.push(s[i]);
        }
        return stack.join("");
    }
}
