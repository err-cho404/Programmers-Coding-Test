function solution(A,B){
    var Aarr = A.sort((a,b)=>a-b);
    var Barr = B.sort((a,b)=>b-a);
    return Aarr.reduce((to,x,i) => to + x * Barr[i], 0);
}