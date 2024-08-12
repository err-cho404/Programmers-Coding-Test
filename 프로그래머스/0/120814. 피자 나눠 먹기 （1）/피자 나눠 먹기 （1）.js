function solution(n) {
    var answer = 0;
    if(1 <= n && n<= 100){
        if(n <= 7){
            answer=1;
        }else if(n%7 == 0){
            answer=n/7;
        }else{
            answer=Math.floor(1 + (n/7));
        }
    }
    return answer;
}