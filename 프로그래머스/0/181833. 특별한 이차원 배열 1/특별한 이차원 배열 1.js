function solution(n) {
    var answer = Array.from(Array(n),()=>new Array(n).fill(0));
    answer.map((x,i)=>x.map((y,j)=>x[i]=1));
    return answer;
}