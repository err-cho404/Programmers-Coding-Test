function solution(id_pw, db) {
    var answer = '';
    for(i=0;i<db.length;i++){
        if(db[i][0]==id_pw[0]&&db[i][1]!=id_pw[1]){
            answer="wrong pw";
        }else if(db[i].toString()==id_pw){
            answer="login";
        }else if(db[i][0]!=id_pw[0]&&db[i][1]!=id_pw[1]){
            answer="fail";
        }
    }
    return answer;
}