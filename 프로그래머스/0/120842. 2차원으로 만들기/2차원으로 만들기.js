function solution(num_list, n) {
    var answer = [[]];
    if(num_list.length%n==0 && 0<= num_list.length && num_list.length<=150 && 2<=n && n<num_list.length){
        for(i=0;i<num_list.length/n;i++){
            var innerArr=[];
            for(j=0;j<n;j++){
                innerArr.push(num_list[j+(i*n)]);
            }
            answer[i]=innerArr;
        }
    }
    return answer;
}