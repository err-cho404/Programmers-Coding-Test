const slice={
  1:(num_list,[a,b,c])=>num_list.slice(0,b+1),
  2:(num_list,[a,b,c])=>num_list.slice(a),
  3:(num_list,[a,b,c])=>num_list.slice(a,b+1),
  4:(num_list,[a,b,c])=>num_list.slice(a,b+1).filter((_,i)=>i%c==0)
}
function solution(n,slicer,num_list) {
  return slice[n](num_list,slicer);
}