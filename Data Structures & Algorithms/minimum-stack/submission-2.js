class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.length > 0) {
            // let popped = stack[stack.length-1]

            let popped=this.stack.pop();
            if(popped===this.minStack[this.minStack.length - 1]){
                this.minStack.pop()
            }
        }
    }

    /**
     * @return {number}
     */
    top() {
        if (this.stack.length > 0) {
            return this.stack[this.stack.length - 1];
        }
    }

    /**
     * @return {number}
     */
    getMin() {
         return this.minStack[this.minStack.length - 1]
    }
}
