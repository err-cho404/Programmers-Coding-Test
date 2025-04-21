function solution(n, m) {
    var nmList = [n, m].sort((a,b)=>a-b);
    var a = Array(nmList[0]).fill(nmList[0]).map((x,i)=>x-i).filter(x=>n%x==0 && m%x==0)[0];
    var c = Array(nmList[1]).fill(nmList[0]).map((x,i)=>x*(i+1)).filter(x=>x%n==0 && x%m==0)[0];
    return [a, c];
}