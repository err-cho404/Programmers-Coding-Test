function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(i=completion.length-1;i>-1;i--){
        for(j=participant.length-1;j>-1;j--){
            if(participant[j]==completion[i]){
                participant.splice(j,1);
                completion.splice(i,1);
                break;
            }
        }
    }
    return participant[0];
}