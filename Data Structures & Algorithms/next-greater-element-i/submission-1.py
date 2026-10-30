class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nextGt = [-1] * len(nums2)
        print(nextGt, "next")
        maxsofar = nums2[-1]
        for i in range(len(nums2) - 2, -1, -1):
            if nums2[i] < nums2[i + 1]:
                nextGt[i] = nums2[i+1]
            elif nums2[i] < maxsofar:
                nextGt[i] = maxsofar
            maxsofar = max(nums2[i],maxsofar)
        res=[]
        for i in range(len(nums1)):
            pos=nums2.index(nums1[i])
            res.append(nextGt[pos])

        return res
