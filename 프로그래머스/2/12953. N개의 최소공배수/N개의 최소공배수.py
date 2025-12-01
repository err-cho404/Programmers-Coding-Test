def solution(arr):
    maxnum = max(arr)
    while 1 :
        count = 0
        for i,val in enumerate(arr) : 
            if maxnum % val == 0 :
                count += 1
                if count == len(arr) : 
                    return maxnum
            else :
                maxnum += max(arr)
                break
    return maxnum