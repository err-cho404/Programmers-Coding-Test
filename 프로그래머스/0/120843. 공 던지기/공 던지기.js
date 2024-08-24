function solution(numbers, k) {
    var answer = 0;
    if(2<numbers.length && numbers.length<100 && 0<k && k<1000){
        var x=numbers.length*k;
        var idx=0;
        for(j=0;j<x;j++){
            numbers.push(numbers[j]);
        }

        if(k==1){
            answer=numbers[0];
        }else{
            for(i=1;i<k;i++){
                idx=idx+2;
                
                answer=numbers[idx];
            }
        }

    }
    return answer;
}
