function solution(babbling) {
    const arr=["aya", "ye", "woo", "ma"];
    for(i=0;i<babbling.length;i++){
        for(j=0;j<arr.length;j++){
            babbling[i]=babbling[i].replace(arr[j],' ');
        }
    }
    return babbling.map(x=>x.replaceAll(' ','')).filter(x=>x==='').length;
}