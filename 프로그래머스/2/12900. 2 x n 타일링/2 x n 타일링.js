function solution(n) {
    var answer = [1n,2n];
    while(answer.length<n){
        answer.push((answer[answer.length-2]+answer[answer.length-1])%1000000007n);
    }
    return answer[answer.length-1];
}