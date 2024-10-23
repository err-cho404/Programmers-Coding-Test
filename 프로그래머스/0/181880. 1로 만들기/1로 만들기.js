function solution(num_list) {
    return num_list.map(x=>x.toString(2).length-1).reduce((a,b)=>a+b);
}