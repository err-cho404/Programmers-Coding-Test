def solution(price):
    answer = 0
    if 10<=price<=1000000 and price%10==0:
        if price<100000:
            answer=price
        else:
            limit=500000
            saleper=0.2
            i=0
            while 1 :  
                if limit-(i*(200000))<=price:
                    answer=int(price-(price*saleper))
                    break
                i+=1
                saleper=saleper/2 
    return answer