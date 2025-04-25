function solution(n){
    return `${n}`.split('').reduce((a,b)=> Number(a)+Number(b),0);
}