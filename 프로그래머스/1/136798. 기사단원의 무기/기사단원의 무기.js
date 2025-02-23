function solution(number, limit, power) {
    var arr = Array.from(Array(number),(_,i)=>i+1);
    var marr = Array.from(Array(number),x=>1);
    for(i=0;i<arr.length;i++){
        for(j=Math.floor(arr[i]/2);j>0;j--){
            if(arr[i]%j==0){
                marr[i]++;
                if(marr[i].length>limit){
                    break;
                }
            }
        }
    }
    return marr.map(x=>x>limit?power:x).reduce((a,b)=>a+b);
}