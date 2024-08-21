function solution(balls, share) {
    var answer = 0;
    if(1 <= balls && balls<= 30 && share <= balls && 1 <= share && share<= 30 ){
        var result=1;
        if(balls-share == 0){
            answer=1;
        }else{
            while(share > 0){
                result = result * balls / share;
                balls = balls-1;
                share = share-1;
            }
            answer=Math.round(result);
        }
    }
    return answer;
}