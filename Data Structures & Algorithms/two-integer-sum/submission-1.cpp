class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> result;
        std::unordered_map<int, int> values;
        for(int i = 0; i < nums.size(); i++){
            if(values.contains(target - nums[i])){
                result.emplace_back(values[target - nums[i]]);
                result.emplace_back(i);
            }
            values[nums[i]] = i;
        }
        return result;
    }
};
