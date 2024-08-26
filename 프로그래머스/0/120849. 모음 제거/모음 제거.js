function solution(my_string) {
    var answer = '';
    const vowel = ['a','e','i','o','u'];
    if(1 <= my_string.length && my_string.length <= 1000){
        for(i=0;i<vowel.length;i++){
            my_string = my_string.replaceAll(vowel[i],'');
        }
        answer=my_string;
    }
    return answer;
}
