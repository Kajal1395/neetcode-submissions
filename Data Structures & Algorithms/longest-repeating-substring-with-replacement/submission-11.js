class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longest = 0;
        let n = s.length;
        let left = 0;
        let right = 0;
        let windowLen = 0;
        let freq = new Map();
        let maxFreq = 0;
        while (right < n) {
            freq.set(s[right], (freq.get(s[right]) || 0) + 1);
            windowLen = right - left + 1;
            maxFreq = Math.max(maxFreq, freq.get(s[right]));

            let replacement = windowLen - maxFreq;

            while (replacement > k) {
                freq.set(s[left], freq.get(s[left]) - 1);
                if (freq.get(s[left]) === 0) {
                    freq.delete(s[left]);
                }
                maxFreq = 0;
                for (let count of freq.values()) {
                    maxFreq = Math.max(maxFreq, count);
                }
                left++;
                windowLen = right - left + 1;
                replacement = windowLen - maxFreq;
                
            }
            console.log(left,right,'wodnwo')
            if (replacement <= k) {
                longest = Math.max(longest, windowLen);
            }
            right++;
        }
        return longest;
        // let longest = 0;
        // let n = s.length;
        // for (let i = 0; i < n; i++) {
        //     let windowLen = 0;
        //     let freq = new Map();
        //     let maxFreq = 0;
        //     for (let j = i; j < n; j++) {
        //         freq.set(s[j], (freq.get(s[j]) || 0) + 1);
        //         windowLen = j - i + 1;
        //         maxFreq = Math.max(maxFreq, freq.get(s[j]));

        //         let replacement = windowLen - maxFreq;
        //         console.log(replacement, "replacement", maxFreq, windowLen);
        //         if (replacement <= k) {
        //             longest = Math.max(longest, windowLen);
        //         }
        //     }
        // }
        // return longest;
    }
}
