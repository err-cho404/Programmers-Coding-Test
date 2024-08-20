function solution(emergency) {
    var answer = [];
    var dict={};
    var sort_list=emergency.slice().sort((a,b)=>a-b);
    for(i=emergency.length;i>0;i--){
        dict[sort_list[emergency.length-i]]=i;
    }
    for(j=0;j<emergency.length;j++){
        answer.push(dict[`${emergency[j]}`]);
    } 
    return answer;
}