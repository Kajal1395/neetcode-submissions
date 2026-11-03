class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        let freqmap = new Map();
        for (let i = 0; i < s.length; i++) {
            freqmap.set(s[i], (freqmap.get(s[i]) || 0) + 1);
        }
        let evenmin = Infinity;
        let oddmax = -Infinity;
        for (let [key, value] of freqmap) {
            if (value % 2 === 0) {
                evenmin = Math.min(evenmin, value);
            } else {
                oddmax = Math.max(oddmax, value);
            }
        }
        return oddmax - evenmin;
    }
}
