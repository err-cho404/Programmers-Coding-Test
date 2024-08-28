function solution(s) {
    var answer = 0;
    var arr=s.split(' ');
    var numarr=arr.filter(idx=>idx!='Z').map(Number);
    if(1<=s.length && s.length<=200 && -1000<Math.min(...numarr) && Math.max(...numarr)<1000 && arr[0]!='Z'){
        while(arr.indexOf('Z')!=-1){
            arr.splice(arr.indexOf('Z')-1,2);
        }
        answer=arr.reduce((a,b)=>(Math.floor(a)+Math.floor(b)),0);
    }
    return answer;
}