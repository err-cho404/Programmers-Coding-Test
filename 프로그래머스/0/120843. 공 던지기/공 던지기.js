function solution(numbers, k) {
    var answer = 0;
    if(2<numbers.length && numbers.length<100 && 0<k && k<1000){
        return numbers[((2 * (k -1))) % numbers.length];
    }
    return answer;
}
