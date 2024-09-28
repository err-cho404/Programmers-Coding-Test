function solution(board, k) {
    return board.flatMap((x,i)=>x.filter((y,j) => i+j<=k)).reduce((a,b)=>a+b,0);
}