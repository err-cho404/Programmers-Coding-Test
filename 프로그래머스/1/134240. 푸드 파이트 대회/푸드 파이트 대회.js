function solution(food) {
    var answer = '';
    food=food.map((_,i)=>food[i+1]%2==1?Math.floor(food[i+1]/2):food[i+1]/2);
    for(i=0;i<food.length;i++){
        for(j=0;j<food[i];j++){
            answer+=`${i+1}`;
        }
    }
    return answer+'0'+answer.split('').reverse().join('');
}