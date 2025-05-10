function solution(s){
    var slen = s.length;
    var count = 0;
    if(s[0]==')' || s[slen-1]=='(' || slen%2==1){
        return false;
    }else{
        for(i=0;i<slen;i++){
            s[i]=='('? count++ : count--;
            if(count<0){
                return false;
            }
        }
    }
    return count==0 ? true : false;
}