class Solution {
    /**
     * @param {string[]} folder
     * @return {string[]}
     */
    removeSubfolders(folder) {
        let res = [];
        for (let i = 0; i < folder.length; i++) {
            let isSub = false;
            for (let j = 0; j < folder.length; j++) {
                if (i !== j && folder[i].startsWith(folder[j] + "/")) {
                    isSub = true;
                    break;
                }
            }
            if (!isSub) {
                res.push(folder[i]);
            }
        }
        console.log(res, "result");
        return res;
    }
}
