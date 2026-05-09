class Solution {
public:
    bool isAnagram(string s, string t) {
        if(s.size() != t.size()){
            return false;
        }
        std::unordered_map<char, int> charactersA;
        std::unordered_map<char, int> charactersB;

       for(int i = 0; i < s.size(); i++){
        charactersA[s[i]]++;
       }
       for(int i = 0; i < t.size(); i++){
        charactersB[t[i]]++;
       }
       if(charactersA.size() != charactersB.size()){
        return false;
       }
       for(const auto& [key, value]: charactersA){
        if(value != charactersB[key]){
            return false;
        }
       }
       return true;
    }
};
