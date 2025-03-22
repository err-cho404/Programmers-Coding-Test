function solution(s) {
    const numEng = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    numEng.map((x,i)=>s = s.replaceAll(x,i));
    return Number(s);
}