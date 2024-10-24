function solution(numbers, n) {
    return numbers.reduce((a,b,i,s)=>{
        if(a>n){
            s.splice(1);
            return a;
        }else{
            return a+b;
        }
    });
}