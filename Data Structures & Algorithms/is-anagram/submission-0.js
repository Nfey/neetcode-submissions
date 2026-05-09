class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
        let hashS = {};
        let hashT = {};
        for(let i = 0; i < s.length; i++){
            hashS[s[i]] = 1 + (hashS[s[i]] || 0);
            hashT[t[i]] = 1 + (hashT[t[i]] || 0);
        }
        for(const key in hashS){
            if(hashS[key] !== hashT[key]){
                return false
            }
        }
        return true
    }
}
