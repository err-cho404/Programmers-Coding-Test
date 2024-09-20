function solution(order) {
    return order.toString().split('').map(x=>x%3==0&&x!=0).filter(x=>x==true).length;
}