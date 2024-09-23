function solution(my_str, n) {
    var answer = [];
    for(i=0;i<(my_str.length/n);i++){
        answer.push(my_str.substring(0+(i*n),n+(i*n))); 
    }
    return answer;
}