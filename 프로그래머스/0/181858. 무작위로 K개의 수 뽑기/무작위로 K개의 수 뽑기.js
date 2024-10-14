function solution(arr, k) {
    var answer = [];
    var newarr=[...new Set(arr)];
    for(i=0;i<k;i++){
        if(Number.isInteger(newarr[i])){
            answer.push(newarr[i]);
        }else{
            answer.push(-1);
        }
    }
    return answer;
}