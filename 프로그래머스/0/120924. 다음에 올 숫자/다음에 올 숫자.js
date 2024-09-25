function solution(common) {
    var resultone = common[0]-common[1];
    var resulttwo = common[1]-common[2];
    return (resultone==resulttwo)? common[common.length-1]-resultone:common[common.length-1]*(resulttwo/resultone);
}