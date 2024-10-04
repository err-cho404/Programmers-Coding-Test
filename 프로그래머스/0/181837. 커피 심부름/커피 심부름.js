function solution(order) {
    var answer = 0;
    order.map(x=>{if(x.includes('cafelatte')){answer+=5000}else{answer+=4500}});
    return answer;
}