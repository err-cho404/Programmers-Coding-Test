function solution(date1, date2) {
    var one=date1.reduce((a,b)=>`${a}`+`${b}`);
    var two=date2.reduce((a,b)=>`${a}`+`${b}`);
    return (Number(one)-Number(two))<0?1:0;
}