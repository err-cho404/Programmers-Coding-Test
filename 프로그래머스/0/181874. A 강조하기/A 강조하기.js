function solution(myString) {
    return myString.split('').map(x=>(x=='a')?x.toUpperCase():(x!='A'&&x==x.toUpperCase())?x.toLowerCase():x).join('');
}