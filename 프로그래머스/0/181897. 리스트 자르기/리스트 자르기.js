function solution(n, slicer, num_list) {
    var [a,b,c]=slicer;
    return n==1?num_list.slice(0,b+1):n==2?num_list.slice(a):n==3?num_list.slice(a,b+1):num_list.slice(a,b+1).filter((_,i)=>i%c==0);
}