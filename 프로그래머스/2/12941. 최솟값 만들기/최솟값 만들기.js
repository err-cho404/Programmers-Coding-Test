function solution(A,B){
    var answer = 0;
    var Aarr = A.sort((a,b)=>a-b);
    var Barr = B.sort((a,b)=>b-a);
    while(Barr.length!=0){
        answer += Aarr[0] * Barr[0];
        Aarr.shift();
        Barr.shift();
    }
    return answer;
}