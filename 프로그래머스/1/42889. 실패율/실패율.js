function solution(N, stages) {
    var answer = []; 
    var Nlist = Array(N).fill(0).map((x,i)=>x+i+1);
    Nlist.map(x => {
        if(x < N+1){
            answer.push([x,stages.filter(y=>y==x).length/stages.filter(y=>y>=x).length]);
        }
    });
    return answer.sort((a,b)=>b[1]-a[1]).map(x=>x[0]);
}