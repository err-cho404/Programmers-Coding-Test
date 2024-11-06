function solution(my_strings, parts) {
    var answer='';
    my_strings.map((x,i)=>answer+=x.slice(parts[i][0],parts[i][1]+1));
    return answer;
}