function solution(balls, share) {
    var answer = 0;
    if(1 <= balls && balls<= 30 && share <= balls && 1 <= share && share<= 30 ){
        var mulshare=[];
        var mulballs=[];
        var mulball=[];
        var x=1;
        var y=1;
        var z=1;
        var ball= balls-share;
        if(ball == 0){
            answer=1;
        }else{
            for(i=0;i<share;i++){
                mulshare.push(share-(1*i));
                x *= mulshare[i];
            }
            for(i=0;i<balls;i++){
                mulballs.push(balls-(1*i));
                y *= mulballs[i];
            }
            for(i=0;i<ball;i++){
                mulball.push(ball-(1*i));
                z *= mulball[i];
            }
            answer=Math.round(y/(z*x));
        }
    }
    return answer;
}