function solution(n) {
    var answer=Array.from(Array(n), () => new Array(n).fill(0));
    var num=1;
    var a=0;
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
           if(answer[i][j]==0){
               answer[i][j]=num;
               num+=1;
               if(j==(n-1)){
                   for(k=i+1;k<n;k++){
                       answer[k][n-1]=num;
                       num+=1;
                   }
                   n=n-1
                   k=k-1;
                   for(m=k;m>a;m--){
                       answer[n][m-1]=num;
                       num+=1;
                   }
                   k=k-1;
                   for(l=k;l>a;l--){
                       answer[l][a]=num;
                       num+=1;
                   }
                   a+=1;
               }
           }
        }
    }
    return answer;
}