function solution(new_id) {
    var answer = '';
    answer = new_id.toLowerCase().replace(/[^a-z0-9-_.]/g,'').replace(/\.{2,}/g, '.').replace(/^\.|\.$/, '').padEnd(1,'a').slice(0,15).replace(/\.$/, '');
    return answer.padEnd(3,answer[answer.length-1]);
}