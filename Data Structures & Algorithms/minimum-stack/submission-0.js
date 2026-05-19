class MinStack {
    constructor() {
      this.stack=[]
    }


    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.stack.length>0){
            // let popped = stack[stack.length-1]
            this.stack.pop()
        }
    }

    /**
     * @return {number}
     */
    top() {
        if(this.stack.length>0){
            return this.stack[this.stack.length-1]
        }
    }

    /**
     * @return {number}
     */
    getMin() {
        let minVal=Infinity
        for(let x of this.stack){
            minVal=Math.min(x,minVal)
        }
        return minVal
    }
}
