function solution(n) {
    var answer = [];
    if(2<=n && n<=10000){
        var arr=[];
        var x=2;
        var result = n;
        while(1){
            if(result%x==0){
                arr.push(x);
                result=result/x;
                if(result==2 || result==1){
                    break;
                }
            }else{
                x=x+1;
            } 
        }
        answer=[...new Set(arr)];
    }
    return answer;
}