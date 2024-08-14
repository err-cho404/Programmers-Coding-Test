function solution(money) {
    var answer = [];
    if(0 < money && money<= 1000000){
        var ame=5500
        answer[0]=Math.floor(money/ame);
        answer[1]=money%ame;
    }
    return answer;
}