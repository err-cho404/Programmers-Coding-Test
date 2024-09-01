function solution(my_string) {
    var answer = 0;
    var result=my_string.split(/[a-zA-Z]/).reduce((a,b)=>Number(a)+Number(b));
    if(result!=0){
        return  Math.floor(result);
    }
    return answer;
}