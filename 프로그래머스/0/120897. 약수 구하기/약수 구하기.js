function solution(n) {
    var answer = [];
    for(i=n;i>0;i--){
        if(n%i==0){
            answer.push(i);
        }
    }
    return answer.sort((a,b)=>a-b);
}