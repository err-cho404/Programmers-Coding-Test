function solution(arr) {
    return arr.every((x,i)=>x.every((y,j)=>arr[i][j]==arr[j][i]))?1:0;
}