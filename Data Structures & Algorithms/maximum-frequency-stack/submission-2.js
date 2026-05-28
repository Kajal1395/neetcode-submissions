class FreqStack {
    constructor() {
        this.freqStack = [];
        this.freqMap = new Map();
        this.maxCount = 0;
        this.maxVal = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.freqMap.set(val, (this.freqMap.get(val) || 0) + 1);
        this.freqStack.push(val);
        this.maxCount = 0;
        for (let [key, value] of this.freqMap) {
            if (value >= this.maxCount) {
                this.maxCount = value;
                this.maxVal = key;
            }
        }
    }

    /**
     * @return {number}
     */
    pop() {
        let popped = "";
        if (
            this.freqStack.length > 0 &&
            this.freqStack[this.freqStack.length - 1] === this.maxVal
        ) {
            popped = this.freqStack.pop();
            this.freqMap.set(popped, this.freqMap.get(popped) - 1);
        } else if (this.freqStack[this.freqStack.length - 1] !== this.maxVal) {
            let tiearr = [];
            let poppedArr = [];
            for (let [key, value] of this.freqMap) {
                if (value === this.maxCount) {
                    tiearr.push(key);
                }
            }
            while (
                this.freqStack.length > 0 &&
                !tiearr.includes(this.freqStack[this.freqStack.length - 1])
            ) {
                poppedArr.push(this.freqStack.pop());
            }
            popped = this.freqStack.pop();

            for (let i = poppedArr.length - 1; i >= 0; i--) {
                this.freqStack.push(poppedArr[i]);
            }

            this.freqMap.set(popped, this.freqMap.get(popped) - 1);
        }
        this.maxCount = 0;
        for (let [key, value] of this.freqMap) {
            if (value >= this.maxCount) {
                this.maxCount = value;
                this.maxVal = key;
            }
        }
        return popped;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
