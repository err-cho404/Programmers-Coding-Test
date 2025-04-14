function solution(dartResult) {
    var arr = [];
    var strDartResult = dartResult.split('').map((x,i) => 
        i!=0 && 0<x && x<10 ? `${'+'+x}` : 
        x==0 && dartResult[i-1]!=1 ? `${'+'+x}` : x).join('').split('+');
    strDartResult.map((x,i)=>{
        if(x.indexOf('S')>-1){
            arr.push(Number(x.slice(0,x.indexOf('S'))));
        }else if(x.indexOf('D')>-1){
            arr.push(Number(x.slice(0,x.indexOf('D')))**2);
        }else if(x.indexOf('T')>-1){
            arr.push(Number(x.slice(0,x.indexOf('T')))**3);
        }
        if(x[x.length-1]=='*'){
            arr[i]*=2;
            arr[i-1]*=2;
        }else if(x[x.length-1]=='#'){
            arr[i]*= -1;
        }
    });
    return arr.reduce((a,b)=>a+b);
}