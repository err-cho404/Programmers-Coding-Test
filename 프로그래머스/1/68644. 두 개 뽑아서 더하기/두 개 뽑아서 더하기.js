function solution(numbers) {
    var answer = [];
    numbers.map((x,xi)=>numbers.map((y,yi)=>{if(xi!=yi)answer.push(x+y)}));
    return [...new Set(answer)].sort((a,b)=>a-b);
}