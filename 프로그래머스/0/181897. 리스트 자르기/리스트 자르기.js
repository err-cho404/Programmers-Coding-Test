function solution(n, slicer, num_list) {
    return n==1?num_list.slice(0,slicer[1]+1):n==2?num_list.slice(slicer[0],num_list.length):n==3?num_list.slice(slicer[0],slicer[1]+1):num_list.slice(slicer[0],slicer[1]+1).filter((_,i)=>i%slicer[2]==0);
}