function solution(binomial) {
    var con=binomial.split(' ');
    return con[1]=='+'? +con[0]+ +con[2]:con[1]=='-'?+con[0]-+con[2]:+con[0]*+con[2];
}