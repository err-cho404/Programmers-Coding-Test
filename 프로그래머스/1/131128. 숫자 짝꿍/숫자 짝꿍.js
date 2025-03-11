function solution(X, Y) {
    var answer = '';
    X = [...X].sort((a,b)=>a-b);
    Y = [...Y].sort((a,b)=>a-b);
    while(X.length > 0){
        var x = X.pop();
        while(Y.length>0 && Y[Y.length-1]>x){
            Y.pop();
        }
        if(Y.length>0 && Y[Y.length-1]==x){
            answer=answer+x;
            Y.pop();
        }
    }
    if(answer[0]=='0') return "0";
    if(answer.length==0) return "-1";
    return answer;
}