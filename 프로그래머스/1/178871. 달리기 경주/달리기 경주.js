function solution(players, callings) {
    var hash = new Map();
    players.map((x, i) => {
        hash.set(x, i);
    });
    callings.map((x, i) => {
        var idx = hash.get(x);
        var front = players[idx-1];

        [players[idx-1],players[idx]] = [players[idx],players[idx-1]];
        
        hash.set(x, hash.get(x)-1);
        hash.set(front, hash.get(x)+1);
    });
    return players;
}