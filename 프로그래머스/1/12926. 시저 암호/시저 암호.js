function solution(s, n) {
    var answer = '';
    const alphabat = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphaLen = alphabat.length;
    for(i=0;i<s.length;i++){
        var alphaIdx = 0;
        if(alphabat.includes(s[i])){
            alphaIdx = alphabat.indexOf(s[i])+n;
            if(alphaIdx >= alphaLen){
                answer += alphabat[alphaIdx-alphaLen];
            }else{
                answer += alphabat[alphaIdx];
            }
        }else if(alphabat.includes(s[i].toUpperCase())){
            alphaIdx = alphabat.indexOf(s[i].toUpperCase())+n;
            if(alphaIdx >= alphaLen){
                answer += alphabat[alphaIdx-alphaLen].toLowerCase();
            }else{
                answer += alphabat[alphaIdx].toLowerCase();
            }
        }else{
            answer += ' ';
        }
    }
    return answer;
}