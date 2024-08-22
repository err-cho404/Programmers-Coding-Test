function solution(dot) {
    var answer = 0;
    if (dot.length==2 && -500 <= dot[0] && dot[0] <= 500&&-500 <= dot[1] && dot[1] <= 500 && dot[0]!=0 && dot[1]!=0){
            return dot[0] > 0 ? dot[1] > 0 ? 1 : 4 : dot[1] > 0 ? 2 : 3;
    }
    return answer;
}