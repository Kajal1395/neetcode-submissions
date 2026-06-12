class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b);
        let n = people.length;
        let low = 0;
        let high = n - 1;
        let temp = [];
        while (low < high) {
            if (people[low] + people[high] <= limit) {
                temp.push([people[low], people[high]]);
                low++;
                high--;
            } else {
                temp.push([people[high]]);
                high--;
            }
        }
        if (low === high) {
            temp.push([people[low]]);
        }
        return temp.length;

        // let indMap = new Map();
        // let n = people.length;
        // let temp = [];
        // for (let i = 0; i < n; i++) {
        //     if (people[i] === limit) {
        //         temp.push([people[i]]);
        //     } else if (people[i] < limit) {
        //         let pair = false;
        //         for (let j = i + 1; j < n; j++) {
        //             if (!indMap.has(j) && !indMap.has(i) && people[i] + people[j] <= limit) {
        //                 indMap.set(i, true);
        //                 indMap.set(j, true);
        //                 temp.push([people[i], people[j]]);
        //                 pair = true;
        //                 break;
        //             }
        //         }
        //         if (!pair && !indMap.has(i)) {
        //             indMap.set(i, true);
        //             temp.push([people[i]]);
        //         }
        //     }
        // }
        // return temp.length;
    }
}
