function solution(my_string) {
    return my_string.split('').map(x=>(x<'a')? x.toLowerCase(): x.toUpperCase()).join('');
}