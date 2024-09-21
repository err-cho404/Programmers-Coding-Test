function solution(n) {
    return `${n}`.split('').map(x=>+x).reduce((a,b)=>a+b);
}