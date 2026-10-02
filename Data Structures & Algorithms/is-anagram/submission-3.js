class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let smap = new Map();
        for (let i = 0; i < s.length; i++) {
            smap.set(s[i], (smap.get(s[i]) || 0) + 1);
        }
        let tmap = new Map();
        for (let i = 0; i < t.length; i++) {
            tmap.set(t[i], (tmap.get(t[i]) || 0) + 1);
        }
        for (let [key, val] of smap) {
            if (val !== tmap.get(key)) {
                return false;
            }
        }
        return true;
    }
}
