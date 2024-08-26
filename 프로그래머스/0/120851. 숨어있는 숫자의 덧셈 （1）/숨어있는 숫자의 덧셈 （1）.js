function solution(my_string) {
    var answer = 0;
    if(1<=my_string.length && my_string.length<=1000){
        answer=my_string.replaceAll(/[a-zA-z]/g,'').split('').map(Number).reduce((a,b)=>(a+b));
    }
    return answer;
}