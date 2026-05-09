class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let ans=[]
        let sortmap=new Map()
        let seen=new Set()
        for(let i=0;i<strs.length;i++){
            let sortstr=strs[i].split("").sort().join("")
            seen.add(sortstr)
            sortmap.set(i,[strs[i],sortstr])
        }
        for(let sortKey of seen){
            let res=[]
            for(let [key,value] of sortmap){
                if(value[1]===sortKey){
                    res.push(value[0])
                }
            }
            ans.push(res)
        }
        return ans
    }
}
