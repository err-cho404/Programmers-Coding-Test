function solution(n) {
    var x=1;
    while(n%x!=1){
        x++;
    }
    return x;
}