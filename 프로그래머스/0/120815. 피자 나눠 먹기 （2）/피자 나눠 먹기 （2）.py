def solution(n):
    answer = 0
    if 1 <= n <= 100:
        i=1
        while 1==1:
            if 6*i%n==0:
                return i
            i+=1
    return answer