function solution(num_list, n) {
    return [...num_list.splice(n),...num_list.splice(0,n)];
}