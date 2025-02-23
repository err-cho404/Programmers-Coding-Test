function solution(number, limit, power) {
    var marr = [];
    for(i=number;i>0;i--){
        var count = 1;
        for(j=1;j<=Math.floor(i/2);j++){
            if(i%j==0){
                count++;
                if(count>limit){
                    break;
                }
            }
        }
        marr.push(count);
    }
    return marr.map(x=>x>limit?power:x).reduce((a,b)=>a+b);
}