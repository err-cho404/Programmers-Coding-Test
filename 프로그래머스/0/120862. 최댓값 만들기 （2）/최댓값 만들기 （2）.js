function solution(numbers) {
    var answer = 0;
    if(-10000<=numbers[0]&&numbers[numbers.length-1]<=10000&&2<=numbers.length&&numbers.length<=100){
        var newNum=[];
        for(i=0;i<numbers.length;i++){
            for(j=i+1;j<numbers.length;j++){
                newNum.push(numbers[i]*numbers[j]);
            }
        }
        newNum.sort((a,b)=>b-a);
        answer=newNum[0];
    }
    return answer;
}