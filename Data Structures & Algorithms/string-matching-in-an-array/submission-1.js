class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        if (words.length <= 1) return [];
        let res = new Set();
        for (let i = 0; i < words.length; i++) {
            for (let j = i + 1; j < words.length; j++) {
                if (words[i].includes(words[j])) {
                    res.add(words[j]);
                } else if (words[j].includes(words[i])) {
                    res.add(words[i]);
                }
            }
        }
        return [...res];
    }
}
