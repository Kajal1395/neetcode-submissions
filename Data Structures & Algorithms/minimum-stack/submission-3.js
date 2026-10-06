class MinStack {
    constructor() {
        this.stack = [];
        this.minVal = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.minVal = Math.min(this.minVal, val);
        this.stack.push([val, this.minVal]);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        if (this.stack.length) {
            this.minVal = this.stack[this.stack.length - 1][1];
        } else {
            this.minVal = Infinity;
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1][0];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1][1];
    }
}
