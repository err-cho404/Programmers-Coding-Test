function solution(x) {
    var answer = true;
    return x%([...`${x}`.split('')].reduce((a,b)=>Number(a)+Number(b))) == 0 ? true : false;
}