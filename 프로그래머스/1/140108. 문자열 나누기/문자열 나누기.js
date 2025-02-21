function solution(s) {
    var answer = 0;
    const sset = [...new Set([...s])];
    var slist = [...s];
    var scountList = Array(sset.length).fill(0);
    var i=0;
    while(i<slist.length){
        scountList[sset.indexOf(slist[i])]++;
        i++;
        var startstrcount = scountList[sset.indexOf(slist[0])];
        var otherstrcount = scountList.filter((_,i)=>i!=sset.indexOf(slist[0])).reduce((a,b)=>a+b,0);
        if([...new Set(slist)].length==1){
                answer++;
                break;
        }else if(startstrcount == otherstrcount){
            answer++;
            slist=slist.slice(startstrcount+otherstrcount);
            scountList = Array(sset.length).fill(0);
            i=0;
        }else if(startstrcount>otherstrcount && startstrcount+otherstrcount==slist.length){
            answer++;
        }
    }
    return answer;
}