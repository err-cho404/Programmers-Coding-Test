function solution(number) {
    var answer = 0;
    for(i=0;i<number.length-2;i++){
        for(j=1;j<number.length-1;j++){
            for(k=2;k<number.length;k++){
                if(number[i]+number[j]+number[k]==0 && i<j && i<k && j<k){
                    answer++;
                }
            }
        }
    }
    return answer;
}