function solution(num_str) {
    return num_str.split('').map(x=>Number(x)).reduce((a,b)=>a+b);
}