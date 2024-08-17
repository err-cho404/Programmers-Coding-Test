def solution(age):
    answer = ''
    alpha=['a','b','c','d','e','f','g','h','i','j']
    alname=[]
    if age%1==0 and age<=1000:
        x=list(str(age))
        for i in range(len(x)):
            alname.append(alpha[int(x[i])])
            answer=''.join(alname)
    return answer