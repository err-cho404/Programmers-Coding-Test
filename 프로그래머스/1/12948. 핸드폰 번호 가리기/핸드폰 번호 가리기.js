function solution(phone_number) {
    var answer = phone_number.substr(-4).padStart(phone_number.length,"*");
    return answer;
}