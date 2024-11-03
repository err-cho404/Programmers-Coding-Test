function solution(my_string) {
    var answer=Array(52).fill(0);
    const alpharr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var strarr=my_string.split('');
    strarr.map(x=>{if(alpharr.includes(x))answer[alpharr.indexOf(x)]+=1});
    return answer;
}