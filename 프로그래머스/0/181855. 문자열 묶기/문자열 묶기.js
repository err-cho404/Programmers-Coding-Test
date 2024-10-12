function solution(strArr) {
    let arr = Array(31).fill(0);
    for (let str of strArr) arr[str.length]++;
    return Math.max(...arr); 
}