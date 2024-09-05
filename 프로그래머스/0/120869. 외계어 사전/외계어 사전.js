function solution(spell, dic) {
    var answer = 0;
    var arr = Array.from(Array(dic.length),()=>Array(spell.length).fill(''));
    for(i=0;i<spell.length;i++){
        for(j=0;j<dic.length;j++){
           if(dic[j].includes(spell[i])){
               arr[j][i]='o';
               
           }else{
               arr[j][i]='x';
           }
        } 
    }
    let arrtwo = arr.map(x=>x.filter(a=>a=='o').length).filter(b=>b==spell.length);
    if(arrtwo[0]==spell.length){
        answer=1;
    }else{
        answer=2;
    }
    return answer;
}

