function solution(my_string) {
    var answer = 0;
    my_string=my_string.split(/[a-zA-Z]/);
    var result=my_string.reduce((a,b)=>Number(a)+Number(b));
    if(result!=0){
        return  Math.floor(result);
    }
    return answer;
}