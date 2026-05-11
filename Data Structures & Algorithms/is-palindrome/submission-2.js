class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str=s.replace(/[^A-Za-z0-9]/g,'').toLowerCase()
        // checks and remove whatever is not alphanumeric by using ^ in the begin ,replace g globally non alphanumeric with '' and convert to lowercase
        
        let reverse=''
        for(let i=str.length-1;i>=0;i--){
                reverse+=str[i]
            
        }  
        return reverse===str    
    }
}
