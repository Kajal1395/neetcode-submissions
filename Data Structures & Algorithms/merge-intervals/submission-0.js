class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        let res = [intervals[0]];
        for (let i = 0; i < intervals.length; i++) {
            let last = res[res.length - 1];
            let [start, end] = intervals[i];
            if (start <= last[1]) {
                last[1] = Math.max(end, last[1]);
            } else {
                res.push([start, end]);
            }
        }
        return res;
    }
}
