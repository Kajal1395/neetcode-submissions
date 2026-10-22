class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        if (intervals.length === 0) return [newInterval];
        intervals.push(newInterval);
        intervals.sort((a, b) => a[0] - b[0]);
        let curr = intervals[0];
        let res = [];
        for (let i = 1; i < intervals.length; i++) {
            if (curr[1] >= intervals[i][0]) {
                curr = [curr[0], Math.max(curr[1], intervals[i][1])];
            } else {
                res.push(curr);
                curr = intervals[i];
            }
        }
        res.push(curr);
        return res;
    }
}
