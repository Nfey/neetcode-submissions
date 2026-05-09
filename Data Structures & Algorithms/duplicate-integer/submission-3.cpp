class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        std::unordered_map<int, int> values;
        for(int i = 0; i < nums.size(); i++){
            if(values.contains(nums[i])){
                return true;
            }
            else {
                values.emplace(nums[i], 1);
            }
        }
        return false;
    }
};