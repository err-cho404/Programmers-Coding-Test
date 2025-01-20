function solution(park, routes) {
    var answer = [];
    park.map((x,y)=>{if(x.indexOf("S")>-1){
        answer=[y,x.indexOf("S")];
    }});
    routes=routes.map(x=>x.split(" "));
    for(var i=0;i<routes.length;i++){
        var cheskarr=[];
        for(var j=1;j<=Number(routes[i][1]);j++){
            if(routes[i][0]=="N" && answer[0]-Number(routes[i][1])>-1){
                cheskarr.push(park[answer[0]-j][answer[1]]);
            }else if(routes[i][0]=="S" && answer[0]+Number(routes[i][1])<park.length){
                cheskarr.push(park[answer[0]+j][answer[1]]);
            }else if(routes[i][0]=="W" && answer[1]-Number(routes[i][1])>-1){
                cheskarr.push(park[answer[0]][answer[1]-j]);
            }else if(routes[i][0]=="E" && answer[1]+Number(routes[i][1])<park[0].length){
                cheskarr.push(park[answer[0]][answer[1]+j]);
            }
        }
        if(routes[i][0]=="N" && cheskarr.length>0 && cheskarr.includes("X")==false){
            answer[0]-=Number(routes[i][1]);
        }else if(routes[i][0]=="S" && cheskarr.length>0 && cheskarr.includes("X")==false){
            answer[0]+=Number(routes[i][1]);
        }else if(routes[i][0]=="W" && cheskarr.length>0 && cheskarr.includes("X")==false){
            answer[1]-=Number(routes[i][1]);
        }else if(routes[i][0]=="E" && cheskarr.length>0 && cheskarr.includes("X")==false){
            answer[1]+=Number(routes[i][1]);
        }
    }
    return answer;
}