function solution(num_list) {
    var answer = [];
    if(1<=num_list.length && num_list.length<=1000){
        for(i=0;i<num_list.length;i++){   
            if(0<=num_list[i] && num_list[i]<=1000){
                break
            }
        }
        answer=num_list.reverse();
    }
    return answer;
}