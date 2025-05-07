function solution(n) {
    var nTwo = n.toString(2).match(/1/g).length;
    var answer = n;
    var answerTwo = 0;
    while(answerTwo!=nTwo){
        answer++;
        answerTwo = answer.toString(2).match(/1/g).length;
    }
    return answer;
}