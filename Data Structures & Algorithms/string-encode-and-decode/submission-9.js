class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let n = strs.length;
        let str = "";
        for (let i = 0; i < n; i++) {
            str += strs[i].length + "#" + strs[i];
        }
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = [];
        let splitted = str.split("");
        for (let i = 0; i < splitted.length; ) {
            let k = i;
            while (splitted[k] !== "#") {
                k++;
            }
            let len = Number(splitted.slice(i, k).join(""));
            let word = splitted.slice(k + 1, k + 1 + len).join("");

            decoded.push(word);
            i = k + 1 + Number(len);
        }
        return decoded;
    }
}
