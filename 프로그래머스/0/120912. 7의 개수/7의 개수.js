function solution(array) {
    return [...array].toString().split('').filter(x=>x=='7').length;
}