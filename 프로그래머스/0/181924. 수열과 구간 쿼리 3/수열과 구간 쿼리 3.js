function solution(arr, queries) {
    queries.map(([a,b])=>[arr[a],arr[b]]=[arr[b],arr[a]]);
    return arr;
}