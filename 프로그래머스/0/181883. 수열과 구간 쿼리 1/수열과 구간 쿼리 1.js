function solution(arr, queries) {
    queries.map(([s,e])=>{while(s<=e)arr[s++]++});
    return arr;
}