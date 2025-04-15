function solution(n, arr1, arr2) {
    var answer = Array(n).fill('');
    for(i=0; i<n; i++){
        arr1[i] = arr1[i].toString(2).padStart(n,0);
        arr2[i] = arr2[i].toString(2).padStart(n,0);
        for(j=0; j<n; j++){
            if(arr1[i][j] == '0' && arr2[i][j] == '0'){
                answer[i] += ' ';
            }else{
                answer[i] += '#';
            }
        }
    }
    return answer;
}