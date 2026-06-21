class Solution {
    /**
     * @param {number[][]} customers
     * @return {number}
     */
    averageWaitingTime(customers) {
        let totalwait = 0;
        let finishTime = 0;
        let n = customers.length;
        for (let [arrival, cook] of customers) {
            let startTime = Math.max(arrival, finishTime);
            finishTime = startTime + cook;
            totalwait += finishTime - arrival;
        }
        return totalwait / n;
    }
}
