function solution(my_string) {
    var answer = '';
    return answer=[...new Set(my_string)].join('');
}