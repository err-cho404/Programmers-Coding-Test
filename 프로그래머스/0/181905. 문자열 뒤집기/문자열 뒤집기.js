function solution(my_string, s, e) {
    return [...my_string].slice(0,s).join('')+[...my_string].slice(s,e+1).reverse().join('')+[...my_string].slice(e+1).join('');
}