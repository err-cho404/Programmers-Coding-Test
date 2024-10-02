function solution(myString) {
    var arr=[];
    myString.split('').map(x=>{if(x<"l"){arr.push('l')}else{arr.push(x)}});
    return arr.join('');
}