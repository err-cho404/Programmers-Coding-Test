function solution(a, b) {
    var answer = 0;
    for(i=b;i>0;i--){
        if(a%i==0&&b%i==0){
            var minA=a/i;
            var minB=b/i;
            break;
        }
    };
    if((minA/minB)%1==0){
        answer=1;
    }
    var arr=[];
    for(j=2;j<=minB;j++){
        if(minB%j==0){
            arr.push(j);
            if(j%2==0||j%5==0){
                answer=1;
            }else{
                answer=2;
                break;
            }
        }
    };
    return answer;
}