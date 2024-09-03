function solution(sides) {
    var answer = 0;
    var longSide=[];
    var [x,y] = sides;
    if(sides.length==2&& x%1==0 && y%1==0 && 1<=x && x<=1000 && 1<=y && y<=1000){
        sides.sort((a,b)=>a-b);
        for(i=sides[1]+1;i<sides[0]+sides[1];i++){
            longSide.push(i);
        }
        for(j=sides[1]-sides[0]+1;j<=sides[1];j++){
            longSide.push(j);
        }
        answer=longSide.length;
    }
    return answer;
}