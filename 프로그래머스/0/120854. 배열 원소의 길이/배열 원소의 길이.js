function solution(strlist) {
    var answer = [];
    var result=[];
    strlist=strlist.map((x)=>x.length);
    if(1 <= Math.min(...strlist) &&  Math.max(...strlist)<=100){
        return strlist;
    }
    return answer;
}