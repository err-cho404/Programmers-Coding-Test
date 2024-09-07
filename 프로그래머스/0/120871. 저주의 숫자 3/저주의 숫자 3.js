function solution(n) {
    var answer = 0;
    const arr = [...new Array(n)].map((x, y) => y + 1);
    var newarr=[];
    var i=1;
    while (newarr.length<n){
        if(i%3!=0&&i.toString().indexOf("3")==-1){
            newarr.push(i);
        }
        i+=1;
    }
    return answer=newarr.pop();
}