function solution(n, control) {
    control.split('').map(x=>x=='w'?n+=1:x=='s'?n-=1:x=='d'?n+=10:n-=10);
    return n;
}