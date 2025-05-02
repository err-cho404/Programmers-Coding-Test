function solution(a, b) {
    var list = [a, b].sort((x,y)=>x-y);
    var answer = 0;
    for(i=list[0];i<=list[1];i++){
        answer+=i;
    }
    return answer;
}