function solution(n_str) {
    var a=n_str.split('').filter(x=>x!='0');
    return n_str.slice(n_str.indexOf(a[0]));
}