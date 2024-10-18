function solution(myString, pat) {
    myString=myString.split('').map((x,i)=>(x=='A')?myString[i]='B':myString[i]='A').join('');
    return myString.includes(pat)?1:0;
}