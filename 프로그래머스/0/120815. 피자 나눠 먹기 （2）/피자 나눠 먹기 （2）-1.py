def solution(n):
    answer = 0
    i=1
    if 1 <= n <= 100:
        if n<=6 and 6%n==0:
            answer=1
        else:
            while 1==1:
                if 6*i%n==0:
                    return i
                i+=1
        return answer
