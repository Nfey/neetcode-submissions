class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        var map = {};
        for (var num of nums){
            if (!map[num]){
                map[num] = [num, 0]
            }
            map[num][1]++;
        }
        var arr = Object.values(map).sort((a,b) => (a[1] - b[1]))
        var ans = [];
        for (var i = 0; i < k; i++){
            ans[i] = arr[arr.length - 1 - i][0]
        }
        return ans
    }
}
