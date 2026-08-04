class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded=''
        for(let x of strs){
            encoded+=x.length+'#'+x
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
            if(/^[0-9]$/.test(str[i])){
                let len=Number(str[i])
                let firstMsg=str.slice(i,i+len+2)
                let msg=firstMsg.slice(2)
                msgs.push(msg)
                i+=len+2
            }else{
                i++
            }

        }
        return msgs
    }
}
