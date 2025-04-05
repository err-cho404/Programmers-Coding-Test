function solution(numbers, hand) {
    var answer = '';
    var left = 10;
    var right = 12;
    numbers.map(x=>{
        x==0?x=11:x;
        if(x%3==0){
            answer+='R';
            right=x;
        }else if(x%3==1){
            answer+='L';
            left=x;
        }else if(Math.abs(Math.floor((left-1)/3)-Math.floor((x-1)/3))+Math.abs(((left-1)%3)-((x-1)%3))==Math.abs(Math.floor((right-1)/3)-Math.floor((x-1)/3))+Math.abs(((right-1)%3)-((x-1)%3))){
            answer+=hand[0].toUpperCase();
            hand[0]=='r'?right=x:left=x;
        }else if(Math.abs(Math.floor((left-1)/3)-Math.floor((x-1)/3))+Math.abs(((left-1)%3)-((x-1)%3))>Math.abs(Math.floor((right-1)/3)-Math.floor((x-1)/3))+Math.abs(((right-1)%3)-((x-1)%3))){
            answer+='R';
            right=x;
        }else{
            answer+='L';
            left=x;
        }
    });
    return answer;
}