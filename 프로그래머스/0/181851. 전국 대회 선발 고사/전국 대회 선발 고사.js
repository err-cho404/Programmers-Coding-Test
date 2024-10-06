function solution(rank, attendance) {
    var arr=rank.filter((x,i)=>attendance[i]==true).sort((a,b)=>a-b);
    return 10000*rank.indexOf(arr[0])+100*rank.indexOf(arr[1])+rank.indexOf(arr[2]);
}