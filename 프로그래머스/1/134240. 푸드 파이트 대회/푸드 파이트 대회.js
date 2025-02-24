function solution(food) {
    var answer = '';
    for(i=0;i<food.length;i++){
        answer+=String(i).repeat(Math.floor(food[i]/2));
    }
    return answer+'0'+answer.split('').reverse().join('');
}