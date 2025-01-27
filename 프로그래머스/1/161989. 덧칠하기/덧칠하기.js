function solution(n, m, section) {
    var answer = 0;
    for(i=0;i<section.length;i++){
        var j = 1;
        if(section[i]+m-1<=(n+m)){
            answer++;
        }
        while(section[i]+m-1>=section[i+j]){
            j++;
        }
        i=i+j-1;
    }
    return answer;
}