function solution(letter) {
    var answer = '';
    var morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    if(1<=letter<=1000){
        var letter_Arr=letter.split(' ');
        for (i=0;i<letter_Arr.length;i++){
            answer=answer+(morse[(`${letter_Arr[i]}`)]);
        }
    }
    
    return answer;
}