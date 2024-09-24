function solution(num, total) {
    var answer = [];
    var startnum=(total/num)-Math.floor(num/2);
    for(i=0;i<num;i++){
        answer.push(Math.ceil(startnum+i));
    }
    return answer;
}