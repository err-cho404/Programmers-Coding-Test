function solution(numbers) {
    var answer = 0;
    for(i=0;i<10;i++){
        !numbers.includes(i)? answer += i : answer;
    }
    return answer;
}