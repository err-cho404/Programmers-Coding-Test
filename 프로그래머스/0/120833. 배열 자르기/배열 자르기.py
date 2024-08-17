def solution(numbers, num1, num2):
    answer = []
    if 2 <= len(numbers) <= 30 and 0 <= num1 < num2 < len(numbers) :
        for i in range(len(numbers)):
            if 0<=numbers[i]<=1000:
                answer=numbers[num1:num2+1]
    return answer