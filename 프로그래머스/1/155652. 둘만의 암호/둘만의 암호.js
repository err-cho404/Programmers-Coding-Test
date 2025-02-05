function solution(s, skip, index) {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    alphabet=alphabet.filter(x=>!skip.includes(x));
    while(alphabet.length<index){
        alphabet=alphabet.concat(alphabet);
    }
    return s.split('').map(x=>alphabet.indexOf(x)+index<alphabet.length?alphabet[alphabet.indexOf(x)+index]:alphabet[alphabet.indexOf(x)+index-alphabet.length]).join('');
}