function solution(chicken) {
    var answer = 0;
    var service=[];
    while (1){
        var remainCoupon=chicken%10;
        chicken=Math.floor(chicken/10);
        service.push(chicken);
        chicken=chicken+remainCoupon;
        if(chicken<10){
            break;
        }
    }
    var result=service.reduce((a,b)=>a+b);
    return answer=result;
}