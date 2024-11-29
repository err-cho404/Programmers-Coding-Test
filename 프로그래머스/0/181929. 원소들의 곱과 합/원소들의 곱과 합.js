function solution(num_list) {
    return num_list.reduce((a,b)=>a*b)<Math.pow(num_list.reduce((a,b)=>a+b),2)?1:0;
}