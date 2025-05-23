function solution(n) {
    var arr = [1n, 1n, 2n];
    for(i=3;i<=n;i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr[n] % 1234567n;
}
//피보나치 수열