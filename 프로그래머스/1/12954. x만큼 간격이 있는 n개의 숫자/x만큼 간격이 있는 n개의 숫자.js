function solution(x, n) {
    return Array(n).fill(0).map((a,i)=>x*(i+1));
}