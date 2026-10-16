class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        res=[]
        for i in range(0,len(nums)):
            for j in range(0,i):
                if(i!=j and nums[i]+nums[j]==target):
                    res.append(j)
                    res.append(i)
        return res
        