function solution(n) {
    var answer = 0;
    var x=[];
    if(1<=n && n<=100){   
        while (1){
            var arr=[];
            for(i=1;i<=n;i++){
                if(n%i==0){
                    arr.push(i);
                }
            }
            if(3<=arr.length){
                x.push(n);
            }
            n=n-1;
            if(n==0){
                break;
            }
        }
        answer=x.length;
    }
    return answer;
}