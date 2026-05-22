class MyQueue {
    constructor() {
        this.stackIn = [];
        this.stackOut = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.stackIn.push(x);
        //Inefficient
        // while (this.stackOut.length > 0) {
        //     this.stackOut.pop();
        // }
        // for (let i = this.stackIn.length - 1; i >= 0; i--) {
        //     this.stackOut.push(this.stackIn[i]);
        // }
        // console.log("stackIn", this.stackIn, "stackOut", this.stackOut);
    }

    /**
     * @return {number}
     */
    pop() {
        this.move();
        return this.stackOut.pop();
    }

    /**
     * @return {number}
     */
    peek() {
        this.move();
        return this.stackOut[this.stackOut.length - 1];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.stackIn.length === 0 && this.stackOut.length === 0;
    }

    move() {
        if (this.stackOut.length === 0) {
            while (this.stackIn.length > 0) {
                this.stackOut.push(this.stackIn.pop());
            }
        }
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
