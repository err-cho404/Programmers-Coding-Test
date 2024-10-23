function solution(arr) {
    var count=0;
    var arrlist=[];
    while(1){
        arr=arr.map(x=>(x>=50&&x%2==0)?x/2:(x<50&&x%2!=0)?x*2+1:x);
        count+=1;
        arrlist.push(arr);
        if(arrlist.length==2&&arrlist[arrlist.length-2].toString()===arrlist[arrlist.length-1].toString()){
            return 0;
        }else if(arrlist.length>1&&arrlist[arrlist.length-2].toString()===arrlist[arrlist.length-1].toString()){
            return count-1;
        }
    }
}