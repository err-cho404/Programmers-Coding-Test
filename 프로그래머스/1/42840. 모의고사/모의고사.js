function solution(answers) {
    var answer = [];
    var count = [0, 0, 0];
    
    const one = '12345'.repeat(Math.ceil(answers.length/5));
    const two = '21232425'.repeat(Math.ceil(answers.length/8));
    const three = '3311224455'.repeat(Math.ceil(answers.length/10));
    
    var i = 0;
    while(i<answers.length){
        if(answers[i]==one[i]){
            count[0]++;
        }
        if(answers[i]==two[i]){
            count[1]++;
        }
        if(answers[i]==three[i]){
            count[2]++;
        }
        i++;
    }

    const maxCount = Math.max(...count);
    count.map((x,i)=>{if(maxCount==x){answer.push(i+1)}});
    
    return answer;
}