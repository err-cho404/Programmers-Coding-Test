function solution(a, b, c, d) {
    var dic={1:0,2:0,3:0,4:0,5:0,6:0};
    [a,b,c,d].map(x=>{if(Object.keys(dic).includes(`${x}`))dic[`${x}`]+=1});
    var filkey=Object.keys(dic).filter(k=>dic[k]!=0);
    var fildic={};
    filkey.forEach(k=>{fildic[k]=dic[k]});
    var len=Object.values(fildic).length;
    return len==1?Object.keys(fildic)[0]*1111:len==4?Number(Object.keys(fildic).sort()[0]):len==3?Object.keys(dic).filter(k=>dic[k]==1).reduce((a,b)=>a*b):Object.keys(dic).filter(k=>dic[k]==2).length==2?Math.abs((Number(Object.keys(dic).filter(k=>dic[k]==2)[0])+Number(Object.keys(dic).filter(k=>dic[k]==2)[1]))*(Number(Object.keys(dic).filter(k=>dic[k]==2)[0])-Number(Object.keys(dic).filter(k=>dic[k]==2)[1]))):Math.pow(10*Number(Object.keys(dic).filter(k=>dic[k]==3))+Number(Object.keys(dic).filter(k=>dic[k]==1)),2);
}