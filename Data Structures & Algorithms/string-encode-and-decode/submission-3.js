class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded=''
        for(let ch of strs){
            encoded+=ch.length+ch
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let msgs=[]
        for(let i=0;i<str.length;){
            let j=i
            while(j<str.length && str[j]>='0' && str[j]<='9'){
                j++
            }
                let len=Number(str.slice(i,j))
                
                let msg=str.slice(j,j+len)
                console.log(len,'msg,',msg)
                msgs.push(msg)
                i=j+len
        }
        return msgs
    }
}
