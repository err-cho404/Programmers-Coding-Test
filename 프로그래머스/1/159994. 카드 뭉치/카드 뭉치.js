function solution(cards1, cards2, goal) {
    var answer = '';
    for(i=0;i<goal.length;i++){
        if(goal[i]==cards1[0]){
            answer+=cards1.shift();
        }else if(goal[i]==cards2[0]){
            answer+=cards2.shift();
        }else{
            break;
        }
    }
    return answer==goal.join('')?"Yes":"No";
}