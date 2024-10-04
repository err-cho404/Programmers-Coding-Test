function solution(order) {
    var answer = 0;
    order.map(x=>x.replace(/ice|hot/g,'')).map(x=>{if(x=='cafelatte'){answer+=5000}else{answer+=4500}});
    return answer;
}