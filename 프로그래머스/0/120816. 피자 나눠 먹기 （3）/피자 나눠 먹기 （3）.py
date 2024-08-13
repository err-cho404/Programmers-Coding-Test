def solution(slice, n):
    answer = 0
    if 2<=slice<=10 and 1<=n<=100:
        if slice==n:
            answer=1
        else:
            i=0
            while 1:
                i+=1
                if (slice*(0+i))%n<slice: 
                    return i
                    
                
    return answer