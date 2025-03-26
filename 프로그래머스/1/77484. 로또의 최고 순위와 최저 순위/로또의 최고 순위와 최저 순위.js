function solution(lottos, win_nums) {
    var answer = [0,0];
    lottos.map(x=>{if(win_nums.includes(x)){
        answer[0]++;
        answer[1]++;
    }else if(x==0){
        answer[0]++;
    }});
    return answer.map(x=>x==0?6:6-x+1);
}