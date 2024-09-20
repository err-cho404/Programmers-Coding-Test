function solution(my_string) {
    return my_string.split('').map(x=>{if(x<'a') {return x.toLowerCase()}else{return x.toUpperCase()}}).join('');
}