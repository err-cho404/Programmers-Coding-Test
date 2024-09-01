function solution(polynomial) {
    var answer = '';
    var result=polynomial.match(/[0-9]*x/g);
    if(result==null){
        result="";
    }else{
        for(i=0;i<result.length;i++){
            if(result[i]=='x'){
                result[i]=1;
            }else{
                result[i]=Number(result[i].match(/[0-9]{0,4}/));
            } 
        }
        result=result.reduce((a,b)=>a+b)+'x';
        if(result=="1x"){
            result="x";
        }
    };
    var number=polynomial.replaceAll(/[0-9]*x/g,'').match(/[0-9]{0,4}/g);
    if(number==null){
        number="";
    }else{
        number=number.reduce((a,b)=>Number(a)+Number(b)); 
    };
    
    if(result!="" && number!=""){
        return result + " + " + number;
    }else if(result!="" && number==""){
        return result;
    }else if(result=="" && number!=""){
        return `${number}`;
    }else{
        return "";
    }
    return answer
}