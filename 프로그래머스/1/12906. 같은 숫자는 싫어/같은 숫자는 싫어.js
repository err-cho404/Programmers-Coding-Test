function solution(arr){
    return arr.filter((x,i)=>x!=arr[i+1]);
}