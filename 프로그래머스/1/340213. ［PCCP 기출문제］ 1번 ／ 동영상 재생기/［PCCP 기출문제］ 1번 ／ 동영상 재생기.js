function solution(video_len, pos, op_start, op_end, commands) {
    var pos_split = pos.split(":");
    const start=Number(op_start.replace(":",""));
    const end=Number(op_end.replace(":",""));
    const videoendmm=Number(video_len.slice(0,2));
    const videoendss=Number(video_len.slice(3,5));
    if(end>=Number(pos_split.join(''))&&Number(pos_split.join(''))>=start){
        pos_split=op_end.split(":").map(x=>Number(x));
    }
    pos_split = pos_split.map(x=>Number(x));
    for(i=0;i<commands.length;i++){
        if(commands[i]=="next"){
            pos_split[1]+=10;
            if(pos_split[0]<videoendmm&&pos_split[1]>59){
                pos_split[0]+=1;
                pos_split[1]-=60;
            }
            if(pos_split[0]>videoendmm){
                pos_split[0]=videoendmm;
            }
            if(pos_split[0]==videoendmm&&pos_split[1]>videoendss){
                pos_split[1]=videoendss
            }
        }else{
            pos_split[1]-=10;
            if(pos_split[0]==0&&pos_split[1]<10){
                pos_split[1]=0
            }else if(pos_split[1]<0){
                pos_split[0]-=1;
                pos_split[1]=60+pos_split[1];
                if(pos_split[0]<0){
                    pos_split[0]=0;
                }
      
            }
        }
        pos_split=pos_split.map(x=>x.toString().length==1?"0"+x:x.toString());
        if(end>=Number(pos_split.join(''))&&Number(pos_split.join(''))>=start){
            pos_split=op_end.split(":").map(x=>Number(x));
        }
        pos_split=pos_split.map(x=>Number(x));
        
    }
    return pos_split.map(x=>x.toString().length==1?"0"+x:x.toString()).join(':');
}