function solution(ineq, eq, n, m) {
    var answer = 0;
    answer=ineq+eq=='>='?n>=m:ineq+eq=='<='?n<=m:ineq+eq=='>!'?n>m:n<m;
    return answer==true?1:0;
}