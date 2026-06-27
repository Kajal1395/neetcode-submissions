class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let left = 0;
        let right = 0;
        let n = s.length;
        let tMap = new Map();
        for (let i = 0; i < t.length; i++) {
            tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
        }
        let need = tMap.size;
        let have = 0;
        let sMap = new Map();
        let str = "";
        let minLen = Infinity;
        while (right < n) {
            if (tMap.has(s[right])) {
                sMap.set(s[right], (sMap.get(s[right]) || 0) + 1);
                if (tMap.get(s[right]) === sMap.get(s[right])) {
                    have++;
                }
            }
            while (need === have) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    str = s.slice(left, right + 1);
                }
                if (sMap.has(s[left])) {
                    sMap.set(s[left], sMap.get(s[left]) - 1);
                    if (sMap.get(s[left]) < tMap.get(s[left])) {
                        have--;
                    }
                    if (sMap.get(s[left]) === 0) {
                        sMap.delete(s[left]);
                    }
                }
                left++;
            }
            right++;
        }
        return str;
    }
}
