function solution(n) {
    var answer = 1;
    for(i=3; i<=n; i+=2){
        var r = Math.sqrt(i);
        var count = 0
        for(j=3; j<=r; j+=2){
            if(i%j==0){
                count++; 
                break;
            }
        }
        if(count==0) answer++;
    }
    return answer;
}