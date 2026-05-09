class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //remove other characters

        let left = 0;
        let right = s.length - 1;

        while(left < right){
            while(left < right && !this.isAlphaNum(s[left])){
                left++
            }
            while(left < right && !this.isAlphaNum(s[right])){
                right--
            }
            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                console.log(s[left], s[right])
                return false
            }
            left++;
            right--;
        }
        return true;
    }
    isAlphaNum(s){
        const charCode = s.charCodeAt(0);
        return ((65 <= charCode && charCode <= 90) || (97 <= charCode && charCode <= 122) || (48 <= charCode && charCode <= 57))
    }
}
