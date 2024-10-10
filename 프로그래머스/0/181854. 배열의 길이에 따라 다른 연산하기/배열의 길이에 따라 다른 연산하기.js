function solution(arr, n) {
    var a=arr.map((_,i)=>{if(i%2==0){return arr[i]=arr[i]+n}else{return arr[i]=arr[i]}});
    var b=arr.map((_,j)=>{if(j%2!=0){return arr[j]=arr[j]+n}else{return arr[j]=arr[j]-n}});
    return (arr.length%2==0)?b:a;
}