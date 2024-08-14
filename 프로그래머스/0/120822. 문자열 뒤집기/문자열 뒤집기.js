function solution(my_string) {
    var answer = '';
    if(1<=my_string.length && my_string.length<=1000){
       answer=[...my_string].reverse().join(''); 
    }
    return answer;
}