function solution(my_string, overwrite_string, s) {
    var answer = '';
    var slicefront =my_string.slice(0,s);
    var sliceback =my_string.slice(s+overwrite_string.length,my_string.length);
    return slicefront+overwrite_string+sliceback
}