def solution(numbers):
    answer = 0
    if 1<=len(numbers)<=100 and 0<=min(numbers) and max(numbers)<=1000 and sum(numbers)%0.5==0:
        answer=sum(numbers)/len(numbers)
    return answer