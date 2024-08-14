function solution(num_list) {
    var answer = [];
    var odd=[];
    var even=[];
    for(i=0;i<num_list.length;i++){
        if(num_list[i]%2==0){
            odd.push(num_list[i])
        }else{
            even.push(num_list[i])
        }  
    }
    answer.push(odd.length);
    answer.push(even.length);
    return answer;
}