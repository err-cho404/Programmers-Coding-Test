function solution(wallpaper) {
    var first = wallpaper.map(x=>x.includes("#")?wallpaper.indexOf(x):-1).filter(x=>x>-1)[0];
    var second = wallpaper.map(x=>x.split("").findIndex(y=>y=="#")).filter(x=>x>-1).sort((a,b)=>a-b)[0];
    var third = wallpaper.map(x=>x.includes("#")?wallpaper.lastIndexOf(x):-1).sort((a,b)=>b-a)[0]+1;
    var fourth =  wallpaper.map(x=>x.split("").lastIndexOf("#")).sort((a,b)=>b-a)[0]+1;
    return [first,second,third,fourth];
}