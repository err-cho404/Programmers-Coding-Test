function solution(score) {
    var answer = [];
    var scoreAvg=score.map(([a,b])=>(a+b)/2);
    var scoreAvgSort=[...scoreAvg];
    scoreAvgSort.sort((a,b)=>b-a);
    var rank = scoreAvgSort.map((x)=>[x,scoreAvgSort.indexOf(x)+1]);
    var result=[];
    for(i=0;i<rank.length;i++){
        for(j=0;j<rank.length;j++){
            if(scoreAvg[i]==rank[j][0]){
                result.push(rank[j][1]);
                break;
            }
        }
    }
    return answer=result;
}