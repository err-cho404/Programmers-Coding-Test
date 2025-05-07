function solution(n) {
    var nTwo = n.toString(2).split('').filter(x=>x=='1').length;
    var answer = n;
    var answerTwo = 0;
    while(answerTwo!=nTwo){
        answer++;
        answerTwo = answer.toString(2).split('').filter(x=>x=='1').length;
    }
    return answer;
}