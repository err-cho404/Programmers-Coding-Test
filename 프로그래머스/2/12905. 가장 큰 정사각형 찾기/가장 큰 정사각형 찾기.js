function solution(board){
    var answer = board[0].indexOf(1) > -1 ? 1 : 0;
    for(i=1;i<board.length;i++){
        for(j=1;j<board[0].length;j++){
            if(board[i][j]==1){
                board[i][j] = Math.min(board[i-1][j],board[i][j-1],board[i-1][j-1]) + 1;
                if(board[i][j]>answer) answer=board[i][j];
            }
        }
    }
    return answer**2;
}