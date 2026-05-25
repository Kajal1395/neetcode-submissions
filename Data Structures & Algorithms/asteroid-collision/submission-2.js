class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack = [];
        for (let i = 0; i < asteroids.length; i++) {
            let curr = asteroids[i];
            while (stack.length > 0 && stack[stack.length - 1] > 0 && asteroids[i] < 0) {
                if (Math.abs(stack[stack.length - 1]) === Math.abs(asteroids[i])) {
                    curr = 0;
                    stack.pop();
                    break;
                } else if (Math.abs(stack[stack.length - 1]) < Math.abs(asteroids[i])) {
                    stack.pop();
                } else if (Math.abs(stack[stack.length - 1]) > Math.abs(asteroids[i])) {
                    curr = 0;
                    break;
                }
            }
            if (curr !== 0) {
                stack.push(asteroids[i]);
            }
        }
        return stack;
    }
}
