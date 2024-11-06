function solution(number) {
    return [...number].reduce((a,b)=>+a+(+b))%9;
}