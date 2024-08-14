function solution(age) {
    var answer = 0;
    if(0<age && age<=120){
        let standYear=2022;
        answer=standYear-(age-1);
    }
    return answer;
}