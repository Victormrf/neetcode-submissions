class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length - 1;
        let max = 0;

        while (i <= j){
            let calc;

            if(heights[i] <= heights[j]){
                calc = (j - i) * heights[i];
                i++;
            } else{
                calc = (j - i) * heights[j];
                j--;
            }

            max = calc > max ? calc : max;
        }

        return max;
    }
}
