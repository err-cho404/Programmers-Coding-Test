function solution(num_list) {
    return (+num_list.filter(x=>x%2!=0).reduce((a,b)=>`${a}`+`${b}`))+(+num_list.filter(x=>x%2==0).reduce((a,b)=>`${a}`+`${b}`));
}