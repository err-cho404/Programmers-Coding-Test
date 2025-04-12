function solution(array, commands) {
    var answer = [];
    commands.map(x => answer.push(array.slice(x[0]-1,x[1]).sort((a,b)=>a-b)[x[2]-1]));
    return answer;
}