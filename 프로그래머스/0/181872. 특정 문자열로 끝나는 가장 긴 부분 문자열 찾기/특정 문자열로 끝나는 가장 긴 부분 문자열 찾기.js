function solution(myString, pat) {
    var a='';
    for(i=0;i<=myString.length-pat.length;i++){
        if(myString.slice(i,pat.length+i)==pat){
            a=myString.slice(0,i+pat.length);
        }
    }
    return a;
}