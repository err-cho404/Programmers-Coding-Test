function solution(num_list) {
    return num_list.sort((a,b)=>a-b).filter((_,i)=>i>4);
}