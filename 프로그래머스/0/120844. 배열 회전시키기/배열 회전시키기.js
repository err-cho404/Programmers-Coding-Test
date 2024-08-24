function solution(numbers, direction) {
    var answer = [];
    var result = [...numbers];
    if(3<=numbers.length<=20){
        if(direction=="right"){
            result.unshift(result.pop());
            answer=result;
        }else if(direction=="left"){
            result.push(result.shift());
            answer=result;
        }
    }
    return answer;
}