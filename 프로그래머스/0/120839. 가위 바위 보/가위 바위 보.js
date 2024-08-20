function solution(rsp) {
    var answer = '';
    if(0<rsp.length&&rsp.length<=100){
        rsp=rsp.split('');
        for(i=0;i<rsp.length;i++){
            if(rsp[i]==0){
                answer=answer.concat('5');
            }else if(rsp[i]==2){
                answer=answer.concat('0');
            }else{
                answer=answer.concat('2');
            }
        }
    }
    return answer;
}