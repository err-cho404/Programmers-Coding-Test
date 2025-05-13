function solution(n) {
    var answer = '';
    while(1){
        if(n<4){
            n==3? answer="4"+answer : answer=`${n}` + answer;
            break;
        }else{
            n%3==0 ? answer="4"+answer : answer=`${n%3}`+answer;
            n%3==0 ? n=Math.floor(n/3)-1 : n=Math.floor(n/3);
        }
    }
    return answer;
}