function solution(numbers) {
    var answer = 0;
    if(-10000<=numbers[0]&&numbers[numbers.length-1]<=10000&&2<=numbers.length&&numbers.length<=100){
        numbers.sort((a,b)=>b-a);
        answer=Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
    }
    return answer;
}