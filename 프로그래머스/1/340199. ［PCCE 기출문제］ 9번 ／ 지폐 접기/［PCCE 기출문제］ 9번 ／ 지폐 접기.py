import math
def solution(wallet, bill):
    answer = 0
    while (wallet[0] < bill[0] or wallet[1] < bill[1]) and (wallet[0] < bill[1] or wallet[1] < bill[0]) :
        if bill[0]>=bill[1] :
            bill[0]=math.floor(bill[0]/2)
            answer+=1
        else:
            bill[1]=math.floor(bill[1]/2)
            answer+=1
    return answer