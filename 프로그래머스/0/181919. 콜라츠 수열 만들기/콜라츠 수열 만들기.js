function solution(n) {
    var x=n;
    var answer = [];
    while (1){
        answer.push(x);
        if(x%2==0){
            x=x/2;
        }else{
            x=3*x+1;
        }
        if(x==1){
            answer.push(x);
            break;
        }
    }
    return answer;
}