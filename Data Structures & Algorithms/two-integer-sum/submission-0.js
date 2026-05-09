class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hash = {};
        for(let i = 0; i < nums.length; i++){
            if((target - nums[i]) in hash){
                return ([hash[target - nums[i]], i])
            }
            hash[nums[i]] = i;
        }
        return [];
    }
}
