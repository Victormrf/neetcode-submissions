class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sortedNums = nums.sort((a, b) => a - b);

        if(sortedNums.length < 3){
            return []
        }

        let subArrays = [];

        for(let i = 0; i < sortedNums.length - 2; i++){
            if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
            let j = i + 1;
            let k = sortedNums.length - 1;

            while (j < k){
                let calc = sortedNums[j] + sortedNums[k];

                if(calc > -sortedNums[i]){
                    k--;
                } else if(calc < -sortedNums[i]){
                    j++;
                } else{
                    subArrays.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
                    j++;
                    k--;
                    while (j < k && sortedNums[j] === sortedNums[j - 1]) j++;
                    while (j < k && sortedNums[k] === sortedNums[k + 1]) k--;
                }
            }
        }

        return subArrays;
    }
}
