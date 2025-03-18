function solution(id_list, report, k) {
    var answer = new Array(id_list.length).fill(0);
    var countReport = new Array(id_list.length).fill(0);
    var setReport = [...new Set(report)];
    const reporter = setReport.map(x=>x.split(' ')[0]);
    const reportee = setReport.map(x=>x.split(' ')[1]);
    var reportID = [];
    reportee.map(x=>countReport[id_list.indexOf(x)]++);
    countReport.map((x,i) => {if(x > k-1){reportID.push(id_list[i])}});
    reportee.map((y,i)=>{if(reportID.includes(y)){answer[id_list.indexOf(reporter[i])]++}});
    return answer;
}