function solution(n) {
    var answer = 0;
    var result = 1;
    if(0<n && n<=3628800){
        for(i=1;i<=n;i++){
            result=result*i;
            if(n==result){
                answer=i;
                break;
            }else if(n<result){
                answer=i-1;
                break;
            }
        }
    }
    return answer;
}