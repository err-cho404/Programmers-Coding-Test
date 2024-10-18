function solution(myStr) {
    return myStr.replace(/[a-c]/g,'')!=['']?myStr.split(/[a-c]/).filter(x=>x.length>0):["EMPTY"];
}