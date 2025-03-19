function solution(sizes) {
    const w = sizes.map(x=>x.sort((a,b)=>a-b)[0]).sort((a,b)=>b-a)[0];
    const h = sizes.map(x=>x.sort((a,b)=>a-b)[1]).sort((a,b)=>b-a)[0];
    return h * w;
}