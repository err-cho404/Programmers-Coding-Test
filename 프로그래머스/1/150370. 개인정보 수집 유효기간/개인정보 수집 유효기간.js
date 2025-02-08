function solution(today, terms, privacies) {
    today=today.split(".");
    today[0]=Number(today[0])*28*12;
    today[1]=Number(today[1])*28;
    today[2]=Number(today[2]);
    today=today.reduce((a,b)=>a+b);
    terms=terms.map(x=>x.split(" "));
    privacies=privacies.map(x=>x.split(" ")).map(y=>y[0].split(".").concat(y[1]));
    privacies.map(x=>terms.map(y=>{if(x[x.length-1]==y[0]){
        x[0]=Number(x[0])*28*12;
        x[1]=(Number(x[1])+Number(y[1]))*28;
        x[2]=Number(x[2]);
        x[3]=0;
    }}));
    return privacies.map((x,i)=>(x.reduce((a,b)=>a+b))<=today?i+1:0).filter(x=>x>0);
}