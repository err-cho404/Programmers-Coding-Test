function solution(numbers) {
    var answer = 0;
    if(2<=numbers.length && numbers.length<=100 && 0<=Math.min(...numbers) && Math.max(...numbers)<=10000){
        numbers.sort((a,b)=>b-a);
        answer=numbers[0]*numbers[1];
    }
    return answer;
}