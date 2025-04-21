function solution(n, m) {
    var nmList = [n, m].sort((a,b)=>a-b);
    var a = Array(nmList[0]).fill(nmList[0]).map((x,i)=>x-i);
    var b = Array(nmList[1]).fill(nmList[1]).map((x,i)=>x-i);
    var ansOne = a.filter(x=>n%x==0 && m%x==0)[0];
    var c = Array(nmList[1]).fill(nmList[0]).map((x,i)=>x*(i+1));
    var d = Array(nmList[0]).fill(nmList[1]).map((x,i)=>x*(i+1));
    var ansTwo = c.filter(x=>d.includes(x))[0];
    return [ansOne, ansTwo];
}