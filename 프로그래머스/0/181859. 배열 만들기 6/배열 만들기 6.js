function solution(arr) {
    var answer = [];
    var i=0;
    while(arr.length>i){
        if(answer.length===0){
            answer.push(arr[i]);
            i++;
        }else if(answer.length>0 && answer[answer.length-1]==arr[i]){
            answer.pop();
            i++;
        }else if(answer.length>0 && answer[answer.length-1]!=arr[i]){
            answer.push(arr[i]);
            i++;
        }
    }
    if(answer.length===0){
        answer.push(-1);
    }
    return answer;
}