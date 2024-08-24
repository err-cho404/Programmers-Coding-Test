function solution(numbers, k) {
    var answer = 0;
    if(2<numbers.length && numbers.length<100 && 0<k && k<1000){
        var idx=0;
        for(j=0;j<(k*2);j++){
            numbers.push(numbers[j]);
        }
        for(i=1;i<=k;i++){
            answer=numbers[idx];
            idx=idx+2;
        }
    }
    return answer;
}
