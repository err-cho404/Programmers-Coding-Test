function solution(schedules, timelogs, startday) {
    var answer = 0;
    schedules=schedules.map(x=>x+10).map((x=>Number(x.toString().slice(-2))>59?x+40:x));
    return timelogs.map((timelog,idx)=>timelog.filter((x,i)=>schedules[idx]>=x && ((i+startday)%7!=0 && (i+startday)%7!=6))).filter(x=>x.length==5).length;
}