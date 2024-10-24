function solution(numbers, n) {
    return numbers.reduce((a,b,i,s)=>a>n?a:a+b);
}                          