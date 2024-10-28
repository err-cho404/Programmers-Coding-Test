function solution(arr, query) {
    query.map((x,i)=>i%2==0?arr=arr.slice(0,query[i]+1):arr=arr.slice(query[i]));
    return arr;
}