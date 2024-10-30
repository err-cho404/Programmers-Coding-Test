function solution(num_list) {
    var num=num_list.filter(x=>x<0);
    return num.length>0?num_list.indexOf(num[0]):-1;
}