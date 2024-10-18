function solution(myString) {
    return myString.split('x').sort().filter(x=>x.length>0);
}