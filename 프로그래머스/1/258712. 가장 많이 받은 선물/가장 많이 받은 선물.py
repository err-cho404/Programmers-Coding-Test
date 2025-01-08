def solution(friends, gifts):
    answer = [0 for _ in friends]
    giftlist = [[0 for _ in friends] for _ in friends]
    giftpoint = [0 for _ in friends]
    def splistr(gift):
        A = int(friends.index(gift.split(" ")[0]))
        B = int(friends.index(gift.split(" ")[1]))
        giftpoint[A]+=1
        giftpoint[B]-=1
        giftlist[A][B]+=1
        return giftlist
    split_giftlist = list(map(splistr,gifts))
    for i in range(len(friends)) :
        for j in range(len(friends)) :
            if giftlist[i][j] > giftlist[j][i] :
                answer[i]+=1
            elif giftlist[i][j] == giftlist[j][i] and giftpoint[i] > giftpoint[j]:
                answer[i]+=1
            elif giftlist[i][j] == giftlist[j][i] and giftpoint[i] == giftpoint[j] :
                answer[i]+=0
    return max(answer)