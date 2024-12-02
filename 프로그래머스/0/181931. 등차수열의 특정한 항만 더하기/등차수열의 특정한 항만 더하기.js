function solution(a, d, included) {
    var arr = Array.from({length:included.length},(x,i)=>a+(i*d));
    return arr.filter((x,i)=>included[i]==true).reduce((a,b)=>a+b);
}