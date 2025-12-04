import math
def solution(n, words):
    answer = []
    for idx,word in enumerate(words, start = 0) :
        if idx+1 == len(words) :
            break
        prelist = words[:idx]
        if prelist.__contains__(words[idx+1]) or word[-1] != words[idx+1][0]: 
            answer = [(idx+1)%n+1,math.ceil((idx+2)/n)]
            break
        else : 
            answer = [0,0]
    return answer