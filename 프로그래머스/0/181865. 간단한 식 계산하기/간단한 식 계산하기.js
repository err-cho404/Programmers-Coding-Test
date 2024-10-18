function solution(binomial) {
    var con=binomial.split(' ');
    return con[1]=='+'? Number(con[0])+Number(con[2]):con[1]=='-'?Number(con[0])-Number(con[2]):Number(con[0])*Number(con[2]);
}