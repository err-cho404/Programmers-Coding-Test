function solution(k, m, score) {
    var answer = 0;
    score=score.sort((a,b)=>b-a);
    for(i=0;i<Math.floor(score.length/m);i++){
       answer+=(score.slice((i*m),((i+1)*m)).pop()*m);
    }
    return answer;
}