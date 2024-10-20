function solution(myString, pat) {
    var answer=0;
    for(i=0;i<=myString.length-pat.length;i++){
        if(myString.slice(i,pat.length+i)==pat){
            answer+=1;
        }
    }
    return answer;
}