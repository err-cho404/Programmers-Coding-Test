function solution(num_list) {
    if(num_list.filter((_,i)=>i%2!=0).reduce((a,b)=>a+b)>=num_list.filter((_,i)=>i%2==0).reduce((a,b)=>a+b)){
        return num_list.filter((_,i)=>i%2!=0).reduce((a,b)=>a+b)
    }else{
        return num_list.filter((_,i)=>i%2==0).reduce((a,b)=>a+b)
    }
}