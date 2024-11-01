function solution(n, k) {
    return [...Array(Math.floor(n/k))].map((_,i)=>(i+1)*k);
}