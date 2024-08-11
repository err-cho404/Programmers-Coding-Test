function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    if(0 <numer1< 1000 && 0 <denom1< 1000 && 0 <numer2< 1000 && 0 <denom2< 1000){
        answer[0]=(numer1*denom2)+(numer2*denom1);
        answer[1]=denom1*denom2;
        for(i=Math.round(denom1*denom2/2);i>=2;i--){
            if(answer[0]%i==0 && answer[1]%i==0){
                answer[0]=answer[0]/i;
                answer[1]=answer[1]/i;
            }
        }
    }
    return answer;
}