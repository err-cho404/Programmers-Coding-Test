function solution(a, b, c) {
    var arr=[a,b,c];
    return [...new Set(arr)].length==1?(a+b+c)*(Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2))*(Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3)):[...new Set(arr)].length==2?(a+b+c)*(Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2)):a+b+c;
}