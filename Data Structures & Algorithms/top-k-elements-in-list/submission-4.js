class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        var map = {};
        var arr = Array.from({length: nums.length + 1}, () => []);
        for (const num of nums){
            map[num] = (map[num] || 0) + 1;
        }
        for (const key in map){
            arr[map[key]].push(parseInt(key))
        }
        var ans = [];
        for (var i = arr.length - 1; i > 0; i--){
            for (const n of arr[i]){
                ans.push(n);
                if(ans.length === k){
                    return ans;
                }
            }
        }
        return ans
    }
}
