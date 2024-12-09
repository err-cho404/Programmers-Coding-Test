function solution(n) {
    return n%2==0?Array(n/2).fill(0).map((_,i)=>Math.pow(n-(i*2),2)).reduce((a,b)=>a+b):Array(Math.ceil(n/2)).fill(0).map((_,i)=>n-(i*2)).reduce((a,b)=>a+b);
}