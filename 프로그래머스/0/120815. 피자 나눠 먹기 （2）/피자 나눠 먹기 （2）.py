def solution(n):
    answer = 0
    pizza=6
    if 1 <= n <= 100:
        if n<=6 and pizza%n==0:
            answer=1
        else:
            for i in range(0,n-1):
                if ((pizza+(i*6))%n)==0:
                    answer=(pizza+(i*6))//6
                    break
                else:
                    answer=n
    return answer