function solution(k, score) {
    var answer = [];
    var karr = [];
    for(i=0;i<score.length;i++){
        karr.push(score[i]);
        karr.sort((a,b)=>b-a);
        if(karr.length>k){
            karr.pop();
            answer.push(karr[karr.length-1]);
        }else{
            answer.push(karr[karr.length-1]);
        }
    }
    return answer;
}