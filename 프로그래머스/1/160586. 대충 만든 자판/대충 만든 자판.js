function solution(keymap, targets) {
    var answer = [];
    answer = targets.map(x=>x.split('').map(y=>keymap.map(z=>z.indexOf(y)>-1?z.indexOf(y)+1:-1).sort((a,b)=>a-b).filter(i=>i!=-1)[0]).reduce((a,b)=>(a+b),0));
    return answer.map(x=>x>0?x:-1);
}