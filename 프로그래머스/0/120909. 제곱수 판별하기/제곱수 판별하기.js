function solution(n) {
    for(i=1;i<n;i++){
        if(i**2==n){
            return 1;
        }
    }
    return 2;
}