function solution(dots) {
    var answer = 0;
    var xArr=[];
    var yArr=[];
    for(i=0;i<dots.length;i++){
        xArr.push(dots[i][0]);
        yArr.push(dots[i][1]);
    }
    xArr=xArr.map(a=>a+255);
    yArr=yArr.map(b=>b+255);
    xArr=xArr.sort();
    yArr=yArr.sort();
    var x=xArr[xArr.length-1]-xArr[0];
    var y=yArr[yArr.length-1]-yArr[0];
    var wide=Math.floor(x*y);
    return answer=wide;
}