function solution(order) {
    var answer = 0;
    order.map(x=>x.replace(/ice/,'')).map(x=>x.replace(/hot/,'')).map(x=>{if(x=='americano'||x=='anything'){answer+=4500}else{answer+=5000}});
    return answer;
}