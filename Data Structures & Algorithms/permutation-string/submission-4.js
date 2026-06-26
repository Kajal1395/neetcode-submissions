class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let charMap = new Map();
        for (let i = 0; i < s1.length; i++) {
            charMap.set(s1[i], (charMap.get(s1[i]) || 0) + 1);
        }
        let n = s2.length;
        let left = 0;
        let right = 0;
        let s2Map = new Map();
        while (right < n) {
            s2Map.set(s2[right], (s2Map.get(s2[right]) || 0) + 1);
            let windowLen = right - left + 1;
            if (windowLen > s1.length) {
                s2Map.set(s2[left], s2Map.get(s2[left]) - 1);
                if (s2Map.get(s2[left]) === 0) {
                    s2Map.delete(s2[left]);
                }
                left++;
            }
            windowLen = right - left + 1;
            if (windowLen === s1.length) {
                let match = true;
                for (let [key, count] of charMap) {
                    if (s2Map.get(key) !== count) {
                        match = false;
                        break;
                    }
                }
                if (match) {
                    return true;
                }
            }

            right++;
        }
        return false;
        // let n = s2.length;
        // let left = 0;
        // let right = 0;
        // let str = "";
        // while (right < n) {
        //     str += s2[right];
        //     if (str.length > s1.length) {
        //         str = s2.slice(left + 1, right + 1);
        //         left++;
        //     }
        //     if (str.length === s1.length) {
        //         if (str.split("").sort().join("") === s1.split("").sort().join("")) {
        //             return true;
        //         }
        //     }

        //     right++;
        // }
        // return false;
    }
}
