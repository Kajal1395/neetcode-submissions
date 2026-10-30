class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        maxNum = arr[-1]
        arr[-1] = -1
        for i in range(len(arr) - 2, -1, -1):
            curr = arr[i]
            arr[i] = maxNum
            maxNum = max(curr, maxNum)

        print(arr)
        return arr
