function solution(lines) {
    var answer = 0;
    var line1=[];
    for(i=lines[0][0];i<=lines[0][1];i++){
        line1.push(i);
    }
    var line2=[];
    for(i=lines[1][0];i<=lines[1][1];i++){
        line2.push(i);
    }
    var line3=[];
    for(i=lines[2][0];i<=lines[2][1];i++){
        line3.push(i);
    }
    var oneInTwo=line1.filter(x=>line2.includes(x));
    var twoInThree=line2.filter(x=>line3.includes(x));
    var oneInThree=line1.filter(x=>line3.includes(x));
    
    var filter1=oneInTwo.filter(y=>twoInThree.includes(y));
    var filter2=twoInThree.filter(y=>oneInThree.includes(y));
    
    var dellength1=filter1.length-1;
    var dellength2=filter2.length-1;
    
    if(filter1.length<2){dellength1=0}
    if(filter2.length<2){dellength2=0}
    
    var length1=0;
    var length2=0;
    var length3=0;
    
    if(oneInTwo.length>=2){length1=oneInTwo.length-1}
    if(twoInThree.length>=2){length2=twoInThree.length-1}
    if(oneInThree.length>=2){length3=oneInThree.length-1}
    
    return answer=length1+length2+length3-dellength1-dellength2;
}