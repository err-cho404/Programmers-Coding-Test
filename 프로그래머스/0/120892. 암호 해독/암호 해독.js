function solution(cipher, code) {
    return cipher.split('').filter((x,y)=>(y+1)%code==0).join('');
}