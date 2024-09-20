function solution(cipher, code) {
    var answer = '';
    var arr=cipher.split('');
    var newarr=[];
    for(i=code-1;i<arr.length;i+=code){
        newarr.push(arr[i]);
    }
    return answer=newarr.join('');
}