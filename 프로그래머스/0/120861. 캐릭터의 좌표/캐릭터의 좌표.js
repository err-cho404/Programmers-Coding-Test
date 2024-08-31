function solution(keyinput, board) {
    var answer = [];
    var startpoint=[0,0];
    let [width,length]=startpoint;
    if(0<=keyinput.length && keyinput.length<=50 && board[0]%2==1 && 1<=board[0] && board[0] <=99 && board[1]%2==1 && 1<=board[1] && board[1] <=99 ){
        for(i=0;i<keyinput.length;i++){
            if(keyinput[i]=="up"){
                if(-Math.floor(board[1]/2)<=length && length<Math.floor(board[1]/2)){
                    length=length+1;
                }
            }else if(keyinput[i]=="down"){
                if(-Math.floor(board[1]/2)<length && length<=Math.floor(board[1]/2)){
                    length=length-1;
                }
            }else if(keyinput[i]=="left"){
                if(-Math.floor(board[0]/2)<width && width<=Math.floor(board[0]/2)){
                    width=width-1;
                }
            }else if(keyinput[i]=="right"){
                if(-Math.floor(board[0]/2)<=width && width<Math.floor(board[0]/2)){
                    width=width+1;
                }
            }
        }
        answer=[width,length];
    }
    return answer;
}