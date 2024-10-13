function solution(arr) {
    var powerlist=[];
    var i=0;
    while(Math.pow(2,i)<=5000){
        powerlist.push(Math.pow(2,i));
        i++;
    }
    while(powerlist.includes(arr.length)==false){
        arr.push(0);
    }
    return arr;
}