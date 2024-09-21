function solution(quiz) {
    var answer = [];
    var quiz=quiz.map(x=>x.split(' '));
    for(i=0;i<quiz.length;i++){
        if(quiz[i][1]==='+'){
            if(Number(quiz[i][0])+Number(quiz[i][2])==Number(quiz[i][4])){
                answer.push("O");
            }else{
                answer.push("X");
            }
        }else{
            if(Number(quiz[i][0])-Number(quiz[i][2])==Number(quiz[i][4])){
                answer.push("O");
            }else{
                answer.push("X");
            }
        }
    }
    return answer;
}