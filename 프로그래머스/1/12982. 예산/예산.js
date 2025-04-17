function solution(d, budget) {
    var answer = 0;
    d.sort((a,b)=>a-b);
    for(i=0;i<d.length;i++){
        budget=budget-d[i];
        if(budget>=0){
            answer++;
        }
    }
    return answer;
}