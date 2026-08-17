class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        if(!nums.length){
            return -1;
        }

        while (l <= r) {

            if(nums[l] === target){
                return l;
            } else if(nums[r] === target){
                return r;
            }

            let calc = Math.floor((l + r) / 2);

            if(nums[calc] > target){
                r = calc - 1;
            } else if(nums[calc] < target){
                l = calc + 1;
            } else{
                return calc;
            }
        }

        return -1;
    }
}
