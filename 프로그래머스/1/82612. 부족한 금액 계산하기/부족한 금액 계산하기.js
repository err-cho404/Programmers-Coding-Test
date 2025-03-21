function solution(price, money, count) {
    var answer = 0;
    for(i=1; i<count+1; i++){
        answer+=(price*i);
    }
    return answer-money>0? answer-money : 0;
}