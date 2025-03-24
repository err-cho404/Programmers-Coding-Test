function solution(left, right) {
    var answer = 0;
    for(i=left; i<right+1; i++){
        var count = 1;
        for(j=1; j<=i; j++){
            if(i%j==0){
                count++;
            }
        }
        if(count%2==0){
            answer=answer-i;
        }else{
            answer=answer+i;
        }
    }
    return answer;
}