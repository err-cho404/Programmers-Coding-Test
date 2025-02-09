function solution(t, p) {
    var answer = 0;
    var tarr = [];
    for(i=0;i<t.length-p.length+1;i++){
        if(Number(t.slice(i,p.length+i))<=Number(p)){
            tarr.push(t.slice(i,p.length+i));
        }
    }
    return tarr.length;
}