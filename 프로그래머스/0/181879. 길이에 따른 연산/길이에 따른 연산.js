function solution(num_list) {
    return num_list.length>10?num_list.reduce((a,b)=>a+b):num_list.reduce((a,b)=>a*b);
}