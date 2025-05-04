function solution(nums) {
    var setNums = [...new Set(nums)];
    const catchMon = nums.length/2;
    return setNums.slice(0,catchMon).length;
}