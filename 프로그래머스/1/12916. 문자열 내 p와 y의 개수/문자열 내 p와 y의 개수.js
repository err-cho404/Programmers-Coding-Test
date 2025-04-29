function solution(s){
    var pCount = 0;
    var yCount = 0;
    s.toLowerCase().split('').map(x=>x=='p'? pCount++ : x=='y'? yCount++ : x);
    return pCount==yCount;
}