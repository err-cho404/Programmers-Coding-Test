function solution(arr, queries) {
    arr.map((x,i)=>queries.map(y=>y[0]<=i&&i<=y[1]&&i%y[2]==0?arr[i]+=1:arr[i]+=0));
    return arr;
}