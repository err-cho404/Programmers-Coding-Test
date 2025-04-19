function solution(x, n) {
    return Array(n).fill(0).map((a,i)=>a=a+(x*(i+1)));
}