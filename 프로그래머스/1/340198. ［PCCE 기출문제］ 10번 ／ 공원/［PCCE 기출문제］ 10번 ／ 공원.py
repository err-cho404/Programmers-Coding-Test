def solution(mats, park):
    answer = [];
    arr = []
    matsarr = []
    for idx,mat in enumerate(mats) :
        for i in range(len(park[0])-mat+1) :
            for j in range(len(park)-mat+1) :
                matsarr.append([row[i:i+mat] for row in park[j:j+mat]])

    for i,marr in enumerate(matsarr) : 
        if all(n=="-1" for n in sum(marr,[])):
            arr.append(len(marr))
 
    return max(arr) if len(arr)>0 else -1 