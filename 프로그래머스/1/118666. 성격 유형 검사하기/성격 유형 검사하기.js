function solution(survey, choices) {
    var choicescore = {'R':0,'T':0,'C':0,'F':0,'J':0,'M':0,'A':0,'N':0};
    var answer = '';
    choices.map((x,i)=>x>4?choicescore[survey[i][1]]+=(x-4):choicescore[survey[i][0]]+=(4-x));
    choicescore['R']-choicescore['T']>=0?answer+='R':answer+='T';
    choicescore['C']-choicescore['F']>=0?answer+='C':answer+='F';
    choicescore['J']-choicescore['M']>=0?answer+='J':answer+='M';
    choicescore['A']-choicescore['N']>=0?answer+='A':answer+='N';
    return answer;
}