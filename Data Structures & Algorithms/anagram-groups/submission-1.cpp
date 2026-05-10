class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        vector<vector<string>> result;
        std::unordered_map<string,vector<string>> encoded_strings;

        for(int i = 0; i < strs.size(); i++){
            std::array<int,26> encoded_string = {0};
            string string_hash = "";
            for(int k = 0; k < strs[i].size(); k++){
                encoded_string[static_cast<int>(strs[i][k]) - 97] += 1;
            }
            for(int j = 0; j < encoded_string.size(); j++){
                string_hash += to_string(encoded_string[j]);
                string_hash += "#";
            }
            encoded_strings[string_hash].emplace_back(strs[i]);
        }
        for(const auto& [key, value] : encoded_strings){
            result.emplace_back(value);
        }
        return result;
    }
};
