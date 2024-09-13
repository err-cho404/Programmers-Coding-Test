function solution(dots) {
    var answer = 0;
    let [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
    if((x1-x2)/(y1-y2)==(x3-x4)/(y3-y4)||(x1-x3)/(y1-y3)==(x2-x4)/(y2-y4)||(x1-x4)/(y1-y4)==(x2-x3)/(y2-y3)){
        answer=1;
    }
    return answer;
}