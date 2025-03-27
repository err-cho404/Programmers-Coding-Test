function solution(new_id) {
    var answer = '';
    answer = new_id.toLowerCase().replace(/[^a-z0-9-_.]/g,'').replace(/\.{2,}/g, '.').replace(/^\./, '').replace(/\.$/, '');
    answer = answer.length==0?'a':answer.length>15?answer.slice(0,15):answer;
    answer = answer.replace(/\.$/, '');
    while(answer.length<3){
        answer = answer + answer[answer.length-1];
    }
    return answer;
}