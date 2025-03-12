function solution(X, Y) {
    var answer = '';
    var xarr = [...X].sort((a,b)=>a-b);
    var yarr = [...Y].sort((a,b)=>a-b);
    while(xarr.length>0){
        var xpop = xarr.pop();
        while(xpop<yarr[yarr.length-1] && yarr.length>0){
            yarr.pop();
        }
        if(xpop==yarr[yarr.length-1]){
            answer=answer+xpop;
            yarr.pop();
        }
    }
    return answer[0]=="0"?"0":answer.length==0?"-1":answer;
}