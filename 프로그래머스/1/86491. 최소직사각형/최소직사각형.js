function solution(sizes) {
    const w = Math.max(...sizes.map(x=>x.sort((a,b)=>a-b)[0]));
    const h = Math.max(...sizes.map(x=>x.sort((a,b)=>a-b)[1]));
    return h * w;
}