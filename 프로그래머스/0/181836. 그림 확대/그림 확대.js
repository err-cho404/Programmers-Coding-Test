function solution(picture, k) {
    var answer = [];
    for(i=0;i<picture.length;i++){
        var pic=[];
        for(j=0;j<picture[i].length;j++){
            for(n=0;n<k;n++){
                pic.push(picture[i][j]);
            }
        }
        pic=pic.join('');
        for(m=0;m<k;m++){
            answer.push(pic);
        }
    }
    return answer;
}