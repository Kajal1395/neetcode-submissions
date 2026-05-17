class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        //take both edges left=0 and right=0 and now consider this as substring keep expanding
        //jbtk valid nahi hota, use need and have that tracks the unique char,
        //jbtk chars ka count match nhi hota have and need update nahi hote once need becomes 0 means we have all the count so now we store the substr
        //and remove from left untill substring becomes invalid now expand the window again with r till r<s.length

        let tmap = new Map();
        for (let x of t) {
            tmap.set(x, (tmap.get(x) || 0) + 1);
        }
        let l = 0,
            r = 0,
            have = 0,
            need = tmap.size;
        let str = "";
        let minlen=Infinity
        let smap = new Map();
        while (r < s.length) {
            if (tmap.has(s[r])) {
                smap.set(s[r], (smap.get(s[r]) || 0) + 1);
                if (tmap.get(s[r]) === smap.get(s[r])) {
                    have++;
                }
            }
            while (have === need) {
                if(r-l+1<minlen){
                    minlen=r-l+1
                    str = s.slice(l, r + 1);
                }
                
                if (smap.has(s[l])) {
                    smap.set(s[l], smap.get(s[l]) - 1);
                    if (smap.get(s[l]) < tmap.get(s[l])) {
                        have--;
                    }
                    if (smap.get(s[l]) === 0) {
                        smap.delete(s[l]);
                    }
                }
                l++;
            }
            r++;
        }
        return str;
    }
}
