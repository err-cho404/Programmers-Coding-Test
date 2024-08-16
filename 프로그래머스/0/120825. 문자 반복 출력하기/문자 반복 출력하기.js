function solution(my_string, n) {
    var answer = '';
    var result=[];
    if(2<=my_string.length&&my_string.length<=5&&2<=n&&n<=10){
        for(j=0;j<my_string.length;j++){
            for(i=0;i<n;i++){
                result.push(my_string[j]);
            }
        }
        answer=result.join('');
    }
    return answer;
}