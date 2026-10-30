class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let nextGt = Array(nums2.length).fill(-1);
        let n = nums2.length;
        let m = nums1.length;
        let maxsofar = nums2[n - 1];
        for (let i = n - 2; i >= 0; i--) {
            if (nums2[i] < nums2[i + 1]) {
                nextGt[i] = nums2[i + 1];
            } else if (nums2[i] < maxsofar) {
                nextGt[i] = maxsofar;
            }
            maxsofar = Math.max(maxsofar, nums2[i]);
        }
        console.log(nextGt, "gt");
        let res=[]
        for(let i=0;i<m;i++){
            let pos=nums2.indexOf(nums1[i])
            res.push(nextGt[pos])

        }
        return res;
    }
}
