function solution(numbers, direction) {
    var answer = [];
    var result=[]
    if(3<=numbers.length<=20){
        if(direction=="right"){
            result.push(numbers[numbers.length-1]);
            for(i=0;i<numbers.length-1;i++){
                result.push(numbers[i]);
            }
            answer=result;
        }else if(direction=="left"){
            for(i=1;i<numbers.length;i++){
                result.push(numbers[i]);
            }
            result.push(numbers[0]);
            answer=result;
        }
    }
    return answer;
}