function solution(name, yearning, photo) {
    var arr = photo.map(x=>x.reduce((a,b)=> a+=yearning[name.indexOf(b)]??0,0))
    return arr;
}