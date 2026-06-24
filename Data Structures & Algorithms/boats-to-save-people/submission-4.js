class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        let n = people.length;
        let left = 0;
        let right = n - 1;
        let boats = 0;
        people.sort((a, b) => a - b);
        while (left < right) {
            if (people[left] + people[right] <= limit) {
                boats++;
                left++;
                right--;
            } else if (people[left] + people[right] > limit) {
                boats++;
                right--;
            }
        }
        if (left === right) {
            boats++;
        }
        return boats;
    }
}
