function solution(ingredient) {
    var answer = 0;
    var arr = [];
    for(i=0;i<ingredient.length;i++){
        arr.push(ingredient[i]);
        if(arr[arr.length-4]==1&&arr[arr.length-3]==2&&arr[arr.length-2]==3&&arr[arr.length-1]==1){
            answer++;
            for(j=0;j<4;j++){
                arr.pop();
            }
        }
    }
    return answer;
}