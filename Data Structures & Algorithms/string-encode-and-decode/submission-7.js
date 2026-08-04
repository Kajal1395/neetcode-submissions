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
            let len = "";
            if (splitted[i] === "#") {
                let k = i;
                while (k > 0 && !isNaN(splitted[k - 1])) {
                    len = String(splitted[k - 1]) + len;
                    k--;
                }
                let word = splitted.slice(i + 1, i + 1 + Number(len)).join("");

                decoded.push(word);
            }
            i = i + 1 + Number(len);
        }
        return decoded;
    }
}
