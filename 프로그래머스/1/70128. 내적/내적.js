function solution(a, b) {
    return a.reduce((x,y,i) => x += a[i]*b[i], 0);
}