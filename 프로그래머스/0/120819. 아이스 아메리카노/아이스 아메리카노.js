function solution(money) {
    var answer = [];
    if(0 < money && money<= 1000000){
        var ame=5500
        answer.push(Math.floor(money/ame));
        answer.push(money%ame);
    }
    return answer;
}