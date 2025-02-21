function solution(s) {
    var answer = 0;
    var i = 0;
    var start = 0;
    var count = 0;
    while(i<s.length){
        if(count==0){
            answer++;
            start=s[i];
            count=1;
        }else{
            if(start!=s[i]){
                count--;
            }else{
                count++;
            }
            // count가 0이 되면 x값과 x가 아닌 값이 동일한 것이므로 count==0이라면 answer의 값이 1씩 추가되게끔 만듦
        }
        i++;
    }
    return answer;
}