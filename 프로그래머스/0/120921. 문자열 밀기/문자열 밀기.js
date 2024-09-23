function solution(A, B) {
    for(i=0;i<A.length;i++){
        if(A==B){
            return 0;
        }else if(A.split('').pop().concat(A.slice(0,-1))==B){
            return i+1;
        }
        A=A.split('').pop().concat(A.slice(0,-1));
    }
    return -1;
}