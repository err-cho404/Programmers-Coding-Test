function solution(n) {
    var answer = '';
    while(answer.length<n){
        answer.length%2 ? answer+='박' : answer+='수';
    }
    return answer;
}