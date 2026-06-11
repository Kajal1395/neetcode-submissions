class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let kMap = [];
        let res = [];
        for (let i = 0; i < arr.length; i++) {
            kMap.push([Math.abs(x - arr[i]), i]);
        }
        kMap.sort((a, b) => {
            if (a[0] !== b[0]) {
                return a[0] - b[0];
            }
            return arr[a[1]] - arr[b[1]];
        });
        let eles = kMap.slice(0, k);
        eles.sort((a, b) => a[1] - b[1]);
        console.log(eles, "elements");
        for (let i = 0; i < eles.length; i++) {
            res.push(arr[eles[i][1]]);
        }
        console.log(res);

        //sort map and pick top k elements
        //sort them based on index and push in res only the values at the respective index in arr
        return res;
    }
}
