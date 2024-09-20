function solution(cipher, code) {
    var answer = '';
    for(i=code-1;i<cipher.length;i+=code){
        answer+=cipher[i];
    }
    return answer;
}