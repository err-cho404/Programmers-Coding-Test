function solution(arr, queries) {
    var answer = [...arr];
    var newque = queries.map((x,i)=>[...new Array(x[1]-x[0]+1)].map((_,j)=>x[0]+j));
    arr.map((x,i)=>newque.map(y=>y.includes(i)?answer[i]+=1:answer[i]));
    return answer;
}