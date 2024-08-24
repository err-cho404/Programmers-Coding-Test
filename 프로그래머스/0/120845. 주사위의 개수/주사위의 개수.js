function solution(box, n) {
    var answer = 0;
    var minbox=[];
    if(box.length==3 && 1<=n && n<=50){
        for(i=0;i<box.length;i++){
            if(1<=box[i] && box[i]<=100 && n<=box[i]){
                minbox.push(~~(box[i]/n));
            }
        }
        answer=~~(minbox[0]*minbox[1]*minbox[2]);
    }
    return answer;
}