class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length) return false
        let sMap= new Map()
        let tMap=new Map()
        for(let str of s){
            if(sMap.has(str)){
                sMap.set(str,sMap.get(str)+1)
            }else{
                sMap.set(str,1)
            }
        }
        for(let str of t){
            if(tMap.has(str)){
                tMap.set(str,tMap.get(str)+1)
            }else{
                tMap.set(str,1)
            }
        }
         for(let [key,value] of sMap){
            if(tMap.get(key)!==value){
                console.log(tMap.get(key),'tmap')
                return false
            }
         }
        return true
    }
}
