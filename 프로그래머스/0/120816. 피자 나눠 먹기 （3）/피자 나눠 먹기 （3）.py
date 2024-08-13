import numpy as np
def solution(slice, n):
    answer = 0
    if 2<=slice<=10 and 1<=n<=100:
        if slice<n:
            answer=np.ceil(n/slice)
        else:
            answer=1
    return answer