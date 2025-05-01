function solution(strings, n) {
    var answer = strings.sort((a,b) => a[n]==b[n]? a.localeCompare(b): a[n].localeCompare(b[n]));
    return answer;
}