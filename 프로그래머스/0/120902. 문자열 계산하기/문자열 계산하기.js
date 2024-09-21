function solution(my_string) {
    my_string=my_string.split(' ');
    for(i=1;i<my_string.length;i+=2){
        if(my_string[i]==='+'){
                my_string[i+1]=Number(my_string[i-1])+Number(my_string[i+1]);
        }else{
            my_string[i+1]=Number(my_string[i-1])-Number(my_string[i+1]);
        }
    }
    return my_string.pop();
}