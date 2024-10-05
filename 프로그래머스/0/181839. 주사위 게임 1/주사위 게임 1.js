function solution(a, b) {
    return (a%2==1&&b%2==1)?(a**2)+(b**2):(a%2==0&&b%2==0)?Math.abs(a-b):2*(a+b);
}