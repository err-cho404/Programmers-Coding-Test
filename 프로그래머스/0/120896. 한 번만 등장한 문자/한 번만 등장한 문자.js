function solution(s) {
    var answer = '';
    var a=s.split('').sort();
    a=a.map((x,y)=>{if(a[y]==a[y+1])return s=s.replaceAll(x,'')});
    return answer=s.split('').sort().join('');
}