function solution(bin1, bin2) {
    var answer = '';
    var arr1=bin1.split('').reverse().map(x=>Math.floor(x));
    var newarr1=[];
    var one=0;
    for(i=0;i<arr1.length;i++){
        one+=arr1[i]*(2**i);
    }
    
    var arr2=bin2.split('').reverse().map(x=>Math.floor(x));
    var newarr2=[];
    var two=0;
    for(i=0;i<arr2.length;i++){
        two+=arr2[i]*(2**i);
    }       
    var total=one+two;
    
    var result=[];
    
    while(1){
        result.push(total%2);
        total=Math.floor(total/2);
        if(total==0){
            answer=result.map(x=>x.toString()).reverse().reduce((a,b)=>a+b);
            break;
        }
    }
    return answer;
}