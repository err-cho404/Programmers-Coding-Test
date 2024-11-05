function solution(my_string) {
    var strarr=[];
    my_string.split('').map((_,i)=>strarr.push(my_string.slice(i,my_string.length)));
    return strarr.sort();
}