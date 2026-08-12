class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const sanitizedArray = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

        let l = 0;
        let r = sanitizedArray.length - 1;

        while (l <= r) {
            if(sanitizedArray[r] !== sanitizedArray[l]){
                return false
            }

            l++;
            r--;
        }

        return true
    }
}
