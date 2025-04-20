function solution(num) {
    var answer = num;
    var count = 0;
    while(count!=500){
        if(answer==1) break;
        answer%2==0 ? answer = answer/2 : answer = answer*3+1;
        count++;
    }
    return count==500? -1 : count;
}