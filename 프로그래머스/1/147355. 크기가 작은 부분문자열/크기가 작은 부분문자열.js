function solution(t, p) {
    var answer = 0;
    for(i=0;i<t.length-p.length+1;i++){
        if(Number(t.slice(i,p.length+i))<=Number(p)){
            answer++;
        }
    }
    return answer;
}