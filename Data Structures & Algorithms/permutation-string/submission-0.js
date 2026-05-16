class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let s1Map = new Map();
        for (let x of s1) {
            s1Map.set(x, (s1Map.get(x) || 0) + 1);
        }
        let n = s1.length;
        let l = 0,
            r = 0,
            windowsize = 0;
        let s2map = new Map();
        while (r < s2.length) {
                s2map.set(s2[r], (s2map.get(s2[r]) || 0) + 1);
            windowsize = r - l + 1;
             if (windowsize > n) {
                s2map.set(s2[l], s2map.get(s2[l]) - 1);
                if (s2map.get(s2[l]) === 0) {
                    s2map.delete(s2[l]);
                }
                l++;
                windowsize = r - l + 1;
            }
            if (windowsize === n) {
                let match = true;
                for (let [key, value] of s1Map) {
                    if (value !== s2map.get(key)) {
                        match = false;
                        break;
                    }
                }
                if (match) return true;
            }
            r++;
        }
        return false;
    }
}
