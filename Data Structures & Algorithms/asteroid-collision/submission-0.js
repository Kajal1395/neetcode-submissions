class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack = [];
        for (let i = 0; i < asteroids.length; i++) {
            if (i > 0 && stack.length > 0) {
                if (stack[stack.length - 1] < 0 || asteroids[i] < 0) {
                    if (Math.abs(stack[stack.length - 1]) === Math.abs(asteroids[i])) {
                        stack.pop();
                        break;
                    } else if (Math.abs(stack[stack.length - 1]) < Math.abs(asteroids[i])) {
                        stack.pop();
                    }
                }
            }
            stack.push(asteroids[i]);
        }
        return stack;
    }
}
