class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit=0
        let n=prices.length
        for(let i=0;i<n-1;i++){
            for(let j=i+1;j<n;j++){
                maxProfit=Math.max((prices[j]-prices[i]),maxProfit)
            }
        }
        return maxProfit
    }
}
