function solution(array, n) {
    return array[array.sort((a,b)=>a-b).map(x=>Math.abs(n-x)).indexOf(Math.min(...array.sort((a,b)=>a-b).map(x=>Math.abs(n-x))))];
}