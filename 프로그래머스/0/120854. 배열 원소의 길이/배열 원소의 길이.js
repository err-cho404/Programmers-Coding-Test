function solution(strlist) {
    var answer = [];
    var result=[];
    for(i=0;i<strlist.length;i++){
        result[i]=strlist[i].split('').length;
    }
    if(1 <= Math.min(...result) &&  Math.max(...result)<=100){
        return result;
    }
    return answer;
}