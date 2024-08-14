function solution(my_string) {
    var answer = '';
    var x=my_string.split('').reverse();
    if(1<=my_string.length && my_string.length<=1000){
        for(i=0;i<x.length;i++){
            answer+=x[i];
        }
    }
    return answer;
}