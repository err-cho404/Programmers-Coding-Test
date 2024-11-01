function solution(my_string, indices) {
    return my_string.split('').filter((x,i)=>!indices.includes(i)).join('');
}