def solution(board, h, w):
    count = 0
    dh = [0, 1, -1, 0]
    dw = [1, 0, 0, -1]
    n = len(board)
    for i in range(4) :    
        if  (n>h+dh[i] and h+dh[i]>=0) and (n>w+dw[i] and w+dw[i]>=0) and board[h][w]==board[h+dh[i]][w+dw[i]] :
            count+=1
    return count