function solution(start_num, end_num) {
    return [...Array(start_num-end_num+1)].map((_,i)=>-(i-start_num));
}