class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @param {number} k
     * @return {number}
     */
    kthSmallestProduct(nums1, nums2, k) {
        let m = nums1.length;
        let n = nums2.length;
        let p1 = nums1[0] * nums2[0];
        let p2 = nums1[0] * nums2[n - 1];
        let p3 = nums1[m - 1] * nums2[n - 1];
        let p4 = nums1[m - 1] * nums2[0];
        let low = Math.min(p1, p2, p3, p4);
        let high = Math.max(p1, p2, p3, p4);
        let ans;
        while (low <= high) {
            let midProd = Math.floor((low + high) / 2);
            let countK = 0;
            for (let i = 0; i < m; i++) {
                if (nums1[i] > 0) {
                    let low = 0;
                    let high = n - 1;
                    let ans = -1;
                    while (low <= high) {
                        let mid = Math.floor((low + high) / 2);
                        if (nums2[mid] * nums1[i] <= midProd) {
                            low = mid + 1;
                            ans = mid;
                        } else {
                            high = mid - 1;
                        }
                    }
                    countK += ans + 1;
                } else if (nums1[i] < 0) {
                    let low = 0;
                    let high = n - 1;
                    let ans = n;
                    while (low <= high) {
                        let mid = Math.floor((low + high) / 2);
                        if (nums2[mid] * nums1[i] <= midProd) {
                            high = mid - 1;
                            ans = mid;
                        } else {
                            low = mid + 1;
                        }
                    }
                    countK += n - ans;
                } else if (nums1[i] === 0) {
                    if (midProd >= 0) {
                        countK += n;
                    }
                }
            }
            if (countK >= k) {
                ans = midProd;
                high = midProd - 1;
            } else {
                low = midProd + 1;
            }
        }
        return ans;
    }
}
