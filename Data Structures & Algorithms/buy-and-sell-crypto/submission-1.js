class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let minPriceseen = Infinity;
        let n = prices.length;
        for (let i = 0; i < n; i++) {
            minPriceseen = Math.min(minPriceseen, prices[i]);
            maxProfit = Math.max((prices[i] - minPriceseen), maxProfit);
        }
        return maxProfit;

        //TC:O(n^2)
        // let maxProfit=0
        // let n=prices.length
        // for(let i=0;i<n-1;i++){
        //     for(let j=i+1;j<n;j++){
        //         maxProfit=Math.max((prices[j]-prices[i]),maxProfit)
        //     }
        // }
        // return maxProfit
    }
}
