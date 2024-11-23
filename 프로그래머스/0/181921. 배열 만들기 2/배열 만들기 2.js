function solution(l, r) {
    const arr=(...a)=>a.reduce((a,b)=>a.flatMap(x=>b.map(y=>[x,y].flat())));
    const narr=[["0","5"],["0","5"],["0","5"],["0","5"],["0","5"],["0","5"]];
    const allCases=arr(...narr).map(x=>x.reduce((a,b)=>Number(a+b))).filter(x=>l<=x&&x<=r).sort((a,b)=>a-b);
    return allCases.length==0?[-1]:allCases;
}