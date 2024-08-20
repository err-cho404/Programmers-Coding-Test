function solution(hp) {
    var answer = 0;
    let worlord = 5;
    let soldier = 3;
    let worker = 1;
    var x;
    if(0<=hp&&hp<=1000){
        var one= Math.floor(hp/worlord);
        x=hp%worlord;
        var two= Math.floor(x/soldier);
        x=x%soldier;
        var three= Math.floor(x/worker);
        answer=one+two+three;
    }
    return answer;
}