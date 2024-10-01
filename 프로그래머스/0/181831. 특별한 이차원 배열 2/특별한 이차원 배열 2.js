function solution(arr) {
    var checkarr=[];
    arr.map((x,i)=>x.map((y,j)=>checkarr.push(arr[i][j]==arr[j][i])));
    return (checkarr.includes(false)==true)?0:1;
}