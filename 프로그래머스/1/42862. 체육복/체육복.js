function solution(n, lost, reserve) {
    var arr = [];
    lost.map((x,ix) => reserve.map((y,iy) => {if(x==y)arr.push(x)}));
    
    lost=lost.filter(l=>!arr.includes(l)).sort((a,b) => a-b);
    reserve=reserve.filter(r=>!arr.includes(r)).sort((a,b) => a-b);
    
    for(i=0;i<lost.length;i++){
        for(j=0;j<reserve.length;j++){
            if(Math.abs(reserve[j]-lost[i])==1){
                reserve.splice(j,1);
                lost.splice(i,1);
                i--;
            }
        }
    }
    return n-lost.length;
}