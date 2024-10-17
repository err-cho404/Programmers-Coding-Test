function solution(arr, flag) {
    var answer = [];
    flag.map((x,i)=>{if(x===true){for(j=0;j<(arr[i]*2);j++){answer.push(arr[i])}}else{for(j=0;j<arr[i];j++){answer.pop()}}});
    return answer;
}