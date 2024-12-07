function solution(code) {
    var ret = [];
    var mode = 0;
    code.split('').map((x,i)=>mode==0&&x!=1&&i%2==0?ret.push(x):mode==0&&x==1?mode=1:mode==1&&x!=1&&i%2!=0?ret.push(x):mode==1&&x==1?mode=0:ret.push(''));
    return ret.join('')==''?'EMPTY':ret.join('');
}