class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        maxCnt = 0
        count = 0
        for j in range(len(nums)):
            if nums[j] == 1:
                count += 1
                maxCnt = max(maxCnt, count)
            else:
                count = 0
           
        return maxCnt
