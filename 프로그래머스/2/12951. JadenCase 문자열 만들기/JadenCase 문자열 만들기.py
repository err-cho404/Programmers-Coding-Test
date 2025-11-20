def solution(s):
    answer = ''
    for i,val in enumerate(s):
        if i == 0:
            answer += val.upper()
        elif s[i-1] == ' ':
            answer += val.upper()
        elif val.isupper() :
            answer += val.lower()
        else : 
            answer += val
    return answer