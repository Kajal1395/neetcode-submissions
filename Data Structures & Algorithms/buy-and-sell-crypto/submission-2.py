class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxsofar = prices[-1]
        maxprofit = 0
        for i in range(len(prices) - 1, -1, -1):
            maxsofar = max(maxsofar, prices[i])
            maxprofit = max(maxsofar - prices[i], maxprofit)
        return maxprofit
