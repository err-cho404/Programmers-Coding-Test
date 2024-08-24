function solution(numbers, direction) {
    var answer = [];
    var result = [...numbers];
    if(3<=numbers.length<=20){
        if(direction=="right"){
            result.unshift(result[numbers.length-1]);
            result.pop();
            answer=result;
        }else if(direction=="left"){
            result.push(result[0]);
            result.shift();
            answer=result;
        }
    }
    return answer;
}