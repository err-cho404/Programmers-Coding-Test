def solution(s):
    answer = ''
    for i,val in enumerate(s):
        if i == 0:
            answer += val.upper()
        elif s[i-1] == ' ':
            answer += s[i].upper()
        elif val.isupper() and (s[i-1].isalpha or s[i-1].isdigit) :
            answer += val.lower()
        else : 
            answer += val
    return answer