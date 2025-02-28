function solution(babbling) {
    var oribabbling = ["aya", "ye", "woo", "ma" ];
    var rebabbling = ["ayaaya", "yeye", "woowoo", "mama" ];
    const repeat = babbling.length;
    babbling=babbling.map(x=>rebabbling.map(y=>x=x.replace(y,'z'))[oribabbling.length-1]);
    for(i=0;i<100;i++){
        babbling=babbling.map(x=>oribabbling.map(y=>x=x.replace(y,'1'))[oribabbling.length-1]);
    }
    return babbling.map(x=>x.replaceAll('1','')).filter(x=>x=='').length;
}