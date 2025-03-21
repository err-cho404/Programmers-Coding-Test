function solution(numbers) {
    var answer = -1;
    for(i=0;i<10;i++){
        !numbers.includes(i)? answer += i : answer;
    }
    return answer > -1? answer+=1 : answer;
}