function solution(myString, pat) {
    var arr=[];
    for(i=0;i<=myString.length-pat.length;i++){
        arr.push(myString.slice(i,pat.length+i));
    }
    return arr.filter(x=>x==pat).length;
}