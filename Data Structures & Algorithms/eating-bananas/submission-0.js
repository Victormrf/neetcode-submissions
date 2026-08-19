class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let res = r;

        while (l <= r){
            let k = Math.floor((r + l) / 2);

            let time = 0;
            for (const i of piles) {
                time += Math.ceil(i/k)
            }

            if(time <= h){
                res = k
                r = k - 1;
            } else{
                l = k + 1;
            }
        }

        return res;

    }
}
