function solution(n, answer = []) {
    answer.push(n)
    if (n === 1) return answer
    if (n % 2 === 0) return solution(n / 2, answer)
    return solution(3 * n + 1, answer)
}