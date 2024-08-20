function solution(n) {
    var answer = 0;
    var x=[];
    if(1<=n && n<=1000000){
        for(i=0;i<=n;i++){
            if(n%i==0){
                x.push(n/i);
            }
        }
        return answer=x.length;
    }
    return answer;
}