function solution(board, moves) {
    var answer = 0;
    var bucket = [];
    for(i=0;i<moves.length;i++){
        for(j=0;j<board.length;j++){
            if(board[j][moves[i]-1]>0){
                bucket.push(board[j][moves[i]-1]);
                board[j][moves[i]-1]=0;
                break;
            }
            bucket.map((x,i)=>{
                if(x==bucket[i+1]){
                    answer+=2;
                    bucket.splice(i,2);
                }
            });
        }
    }
    return answer;
}