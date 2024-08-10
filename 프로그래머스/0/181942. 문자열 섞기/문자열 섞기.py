def solution(str1, str2):
    answer=''
    for i in range(len(str1)) :
        result = str1[i]+str2[i]
        answer = answer + result
    return answer
