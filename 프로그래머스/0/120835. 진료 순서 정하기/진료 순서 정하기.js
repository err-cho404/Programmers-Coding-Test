function solution(emergency) {
    var answer = [];
    var arr_emergency=[];
    var dict={};
    for(i=0;i<emergency.length;i++){
        arr_emergency.push(emergency[i]);
    } //원본 응급도 저장
    var sort_list=arr_emergency.sort((a,b)=>a-b); //응급도 순서대로 배열
    for(i=emergency.length;i>0;i--){
        dict[sort_list[emergency.length-i]]=i;
    } //딕셔너리에 응급도:응급도 순서 로 정리
    for(j=0;j<emergency.length;j++){
        answer.push(dict[`${emergency[j]}`]);
    } 
    return answer;
}