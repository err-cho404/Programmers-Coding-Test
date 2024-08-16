function solution(my_string, letter) {
    var answer = '';
    if(1<=my_string.length<=100){
        answer = my_string.replaceAll(letter,'');
    }
    return answer;
}