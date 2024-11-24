function solution(arr, queries) {
    var answer=[];
    queries.map(x=>answer.push(arr.filter((_,i)=>x[0]<=i&&i<=x[1]&&x[2]<arr[i]).sort((a,b)=>a-b)[0]));
    return answer.map(x=>x==null?x=-1:x);
}