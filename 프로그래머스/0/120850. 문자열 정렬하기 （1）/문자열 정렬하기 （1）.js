function solution(my_string) {
    var answer = [];
    if(1<=my_string.length && my_string.length<=100){
        my_string=my_string.replace(/[a-z]/g,'').split('').map(Number);
        answer=[...my_string].sort();
    }
    return answer;
}