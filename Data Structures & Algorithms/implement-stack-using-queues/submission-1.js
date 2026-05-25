class MyStack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue1.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.queue1.length === 0) {
            return null;
        }
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        let popped = this.queue1.shift();
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
        return popped;
    }

    /**
     * @return {number}
     */
    top() {
        if (this.queue1.length === 0) {
            return null;
        }
        return this.queue1[this.queue1.length - 1];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.queue1.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
