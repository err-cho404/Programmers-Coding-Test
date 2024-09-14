function solution(numlist, n) {
    var arr=[];
    for(i=0;i<numlist.length;i++){
        arr.push([numlist[i],Math.abs(n-numlist[i])]);
    };
    var resultarr=[];
    arr.sort(((a,b) => a[1]-b[1] || b[0]-a[0])).map(([x,])=>resultarr.push(x));
    return resultarr;
}