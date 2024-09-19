function solution(before, after) {
    var answer = 0;
    var arr=before.split('').map(x=>after=after.replace(x,''));
    if(arr[arr.length-1]===''){
        answer=1;
    }
    return answer;
}