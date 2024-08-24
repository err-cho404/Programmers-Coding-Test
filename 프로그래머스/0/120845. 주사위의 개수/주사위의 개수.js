function solution(box, n) {
    var answer = 0;
    let [width,length,height]=box;
    if(box.length==3 && 1<=n && n<=50 && 1<=width &&width<=100&& 1<=length &&length<=100&& 1<=height &&height<=100){
        answer=(~~(width/n)*~~(length/n)*~~(height/n));
    }
    return answer;
}