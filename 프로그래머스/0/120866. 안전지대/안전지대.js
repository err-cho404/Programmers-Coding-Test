function solution(board) {
    var answer = 0;
    var n=board.map(([a])=>a).length;
    var arr = new Array(n);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(n);
    }
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            try{
                if(board[i][j]==0&&arr[i][j]!='x'){
                    arr[i][j]=0;
                }else if(board[i][j]==1){
                    arr[i-1][j-1]='x';
                    arr[i-1][j]='x';
                    arr[i-1][j+1]='x';
                    arr[i][j-1]='x';
                    arr[i][j]='x';
                    arr[i][j+1]='x';
                    arr[i+1][j-1]='x';
                    arr[i+1][j]='x';
                    arr[i+1][j+1]='x';
                }
            }catch(err){
                    continue;
            }
        }
    }
    const newArr = arr.reduce((acc,x)=> {
		return acc.concat(x);
	},[]);
    return answer=newArr.filter(y=>y==0).length;
}