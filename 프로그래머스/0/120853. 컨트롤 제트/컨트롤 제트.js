function solution(s) {
    var answer = 0;
    var arr=s.split(' ');
    var numarr=arr.filter(idx=>idx!='Z').map(Number);
    var sum=numarr.reduce((a,b)=>a+b);
    var zIdxArr=[];
    if(1<=s.length && s.length<=200 && -1000<Math.min(...numarr) && Math.max(...numarr)<1000 && arr[0]!='Z'){
        var idx=arr.indexOf('Z',idx);
        while(idx!=-1){
            zIdxArr.push(idx);
            var idx=arr.indexOf('Z',idx+1);
        }
        for(i=0;i<zIdxArr.length;i++){
            sum=sum-arr[zIdxArr[i]-1];
        }
        answer=sum;
    }
    return answer;
}