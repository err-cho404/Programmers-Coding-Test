function solution(i, j, k) {
    return arr=Array.from({length:(j-i+1)},(v,index)=>index+i).join('').split('').filter(x=>x==k).length;
}