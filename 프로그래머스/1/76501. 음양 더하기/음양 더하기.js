function solution(absolutes, signs) {
    return absolutes.map((x,i)=>signs[i]==true?x:-x).reduce((a,b)=>a+b);
}