class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hash = {}
        for(let i = 0; i < nums.length; i++){
            if(hash[nums[i]]) {
                console.log(hash[nums[i]])
                return true;
            }
            hash[nums[i]] = true;
        }
        return false;
    }
}
