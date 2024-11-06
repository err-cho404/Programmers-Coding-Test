function solution(my_string, queries) {
    var str=my_string.split('');
    var reverseArr=queries.map(x=>str.splice(x[0],x[1]-x[0]+1,...str.slice(x[0],x[1]+1).reverse()));
    return str.join('');
}