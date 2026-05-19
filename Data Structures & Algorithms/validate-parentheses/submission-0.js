class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let smap = {
            "}": "{",
            ")": "(",
            "]": "[",
        };
        let stack = [];
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
                stack.push(s[i]);
            } else {
                if (stack.pop() !== smap[s[i]]) return false;
            }
        }
        return stack.length===0
    }
}
