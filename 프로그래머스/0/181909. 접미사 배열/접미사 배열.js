function solution(my_string) {
    return my_string.split('').map((_,i)=>my_string.substring(i)).sort();
}