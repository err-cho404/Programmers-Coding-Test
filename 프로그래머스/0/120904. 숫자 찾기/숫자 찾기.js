function solution(num, k) {
    var answer = 0;
    num =`${num}`.split('');
    var arr = num.filter(x => x==`${k}`);
    return (arr.length==0)? -1 : num.indexOf(arr[0])+1;
}