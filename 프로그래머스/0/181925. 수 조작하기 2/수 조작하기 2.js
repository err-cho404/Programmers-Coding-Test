function solution(numLog) {
    return numLog.map((x,i)=>numLog[i]-numLog[i-1]).map(y=>y==1?'w':y==-1?'s':y==10?'d':y==-10?'a':'').join('');
}