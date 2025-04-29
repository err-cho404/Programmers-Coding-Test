function solution(s) {
    var regex = /^[0-9]{4,6}$/
    return regex.test(s) && s.length!=5 ? true : false;
}