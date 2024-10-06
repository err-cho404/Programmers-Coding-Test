function solution(num_str) {
    return num_str.split('').reduce((a,b)=>(+a)+(+b));
}