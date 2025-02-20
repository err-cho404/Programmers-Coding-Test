function solution(s) {
    var answer = [];
    for(i=s.length;i>0;i--){
        var subs = s.substr(0,i-1);
        var lasts = s[i-1];
        subs.lastIndexOf(lasts)==-1?answer.push(-1):answer.push(i-1-subs.lastIndexOf(lasts));
    }
    return answer.reverse();
}