function solution(s) {
    var slengDiv = Math.floor(s.length/2);
    return s.length%2==0? s.slice((slengDiv)-1,slengDiv+1) : s[slengDiv];
}