function solution(number) {
    return number.split('').map(x=>+x).reduce((a,b)=>a+b)%9;
}