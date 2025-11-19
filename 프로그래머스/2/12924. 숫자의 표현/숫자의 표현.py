def solution(n):
    answer = 0
    for j in range(1,n):
        add_val = 0
        for i in range(j,n):
            add_val += i
            if add_val == n:
                answer += 1
                break
            elif add_val > n:
                break
    return answer + 1