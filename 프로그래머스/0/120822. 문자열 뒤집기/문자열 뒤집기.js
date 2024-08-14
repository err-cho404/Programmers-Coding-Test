function solution(my_string) {
    var answer = '';
    var x=my_string.split('').reverse();
    for(i=0;i<x.length;i++){
        answer+=x[i];
    }
    return answer;
}