function solution(n, w, num) {
    var arr= [];
    var el = 0;
    for(i=0;i<Math.ceil(n/w);i++){
        var inarr = [];
        if(i%2==0){
            for(j=0;j<w;j++){
                el++;
                inarr.push(el);
            }
            arr.push(inarr);
        }else{
            for(j=0;j<w;j++){
                el++;
                inarr.push(el);
            }
            inarr.reverse();
            arr.push(inarr);
        }
        
    }
    var idx=arr.map(x=>x.indexOf(num)).filter(y=>y>-1)[0]
    return arr.map(x=>x[idx]).filter(y=>y>=num && y<=n).length;
}