class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let seen=new Set()
        let str='',len=0,maxLen=0
        let left=0,right=0
        while(right<s.length){
            while(seen.has(s[right])){
                seen.delete(s[left]) 
                left++ 
            }
            seen.add(s[right])
            str=s.slice(left,right+1)
            len=right-left+1
            if(len>maxLen){
                maxLen=len
                console.log(str,'has the longest string')
            }
            right++ 
        }
        return maxLen
    }
}
