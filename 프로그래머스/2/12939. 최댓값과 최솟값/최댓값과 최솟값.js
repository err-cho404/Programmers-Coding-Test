function solution(s) {
    var sarr = s.split(' ').map(x=> +x).sort((a,b)=>a-b);
    return `${sarr[0]}`+' '+`${sarr[sarr.length-1]}`;
}