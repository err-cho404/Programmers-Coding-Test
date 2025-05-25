function solution(n) {
    var nlist = [1n,1n];
    while(nlist.length<n){
        nlist.push(nlist[nlist.length-1]+nlist[nlist.length-2]);
    }
    var answer = nlist[n-1]%1234567n;
    return answer;
}