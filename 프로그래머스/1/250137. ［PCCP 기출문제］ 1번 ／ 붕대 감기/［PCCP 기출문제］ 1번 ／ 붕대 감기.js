function solution(bandage, health, attacks) {
    const [t,x,y] = bandage;
    const attacktime = attacks.map(x=>x[0]);
    var curhealth = health;
    var bantime = 0;
    for(i=0;i<=attacks[attacks.length-1][0];i++){
        if(attacktime.includes(i)){
            curhealth=curhealth-attacks[attacktime.indexOf(i)][1];
            bantime=0;
            if(curhealth<1){
                break;
            }
        }else if(curhealth<health){
            curhealth+=x;
            bantime++;
        }
        if(bantime==t){
            curhealth+=y;
            bantime=0;
        }
        if(curhealth>health){
            curhealth=health;
        }
    }
    return curhealth>0? curhealth:-1;
}