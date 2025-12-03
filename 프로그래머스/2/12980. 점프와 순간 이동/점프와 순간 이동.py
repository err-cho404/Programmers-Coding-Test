def solution(n):
    ans = 1
    while n > 1 :
        if n%2 == 0 :
            n = n//2  # 순간이동은 카운트 x
        else :
            n -= 1
            ans += 1 # 점프는 카운트 o
    return ans