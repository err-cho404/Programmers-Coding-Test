function solution(my_string, k) {
    var string='';
    for(i=0;i<k;i++){
        string=string.concat(my_string);
    }
    return string;
}