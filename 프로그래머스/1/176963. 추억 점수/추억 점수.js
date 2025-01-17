function solution(name, yearning, photo) {
    var arr = photo.map(x=>x.map((y,j)=>yearning[name.indexOf(y)]>-1?yearning[name.indexOf(y)]:0))
    return arr.map(x=>x.reduce((a,b)=>a+b));
}