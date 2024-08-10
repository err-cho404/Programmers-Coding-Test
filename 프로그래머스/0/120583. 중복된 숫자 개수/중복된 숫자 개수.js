function solution(array, n) {
    var answer = 0;
    array.map((val,idx)=>{if(val==n) answer=answer+1});
    return answer;
}