def solution(n):
    answer = []
    if 1<=n<=100:
        for i in range(1,n+1,2):
            answer.append(i)
    return answer