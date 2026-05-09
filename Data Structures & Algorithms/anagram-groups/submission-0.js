class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //make hash map
        var map = {};
        // loop through strs
        for (const s of strs){
        // convert strings to arrays with count of each letter
            const count = Array(26).fill(0);
            for (const c of s){
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            // if array matches existing array, group them together in hash
            const key = count.join();
            if(!map[key]){
                map[key] = [];
            }
            map[key].push(s);



        // else add it to a new list 
        }
        return Object.values(map);
    }
}
