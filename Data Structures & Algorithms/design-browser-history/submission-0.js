class ListNode {
    constructor(val, next = null, prev = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.current = new ListNode(homepage);
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        let newTab = new ListNode(url);
        this.current.next = newTab;
        newTab.prev = this.current;
        this.current = newTab;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        while (steps > 0 && this.current.prev) {
            this.current = this.current.prev;
            steps--;
        }
        return this.current.val;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        while (steps > 0 && this.current.next) {
            this.current = this.current.next;
            steps--
        }
        return this.current.val;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
