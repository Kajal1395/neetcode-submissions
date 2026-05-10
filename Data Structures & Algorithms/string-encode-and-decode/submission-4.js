class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded=''
        for(let ch of strs){
            encoded+=ch.length+'#'+ch
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
            let pos=str.indexOf('#',i)
            let len=Number(str.slice(i,pos))
            i=pos+1
            let msg=str.slice(i,i+len)
            msgs.push(msg)
            i=i+len
        }
        return msgs
    }
}
