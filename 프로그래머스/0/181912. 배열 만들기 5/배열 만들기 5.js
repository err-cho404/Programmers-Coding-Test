function solution(intStrs, k, s, l) {
    var answer=[];
    for(i=0; i<intStrs.length ; i++){
        intStrs[i]=intStrs[i].substr(s,l);
        intStrs[i]=Number(intStrs[i]);
        if(intStrs[i]>k){
            answer.push(intStrs[i]);
        }
    }
    return answer;
}


