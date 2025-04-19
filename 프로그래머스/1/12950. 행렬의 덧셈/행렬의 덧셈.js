function solution(arr1, arr2) {
    var answer = [...arr1];
    answer.map((x,xi)=>x.map((y,yi)=> answer[xi][yi]+=arr2[xi][yi]));
    return answer;
}