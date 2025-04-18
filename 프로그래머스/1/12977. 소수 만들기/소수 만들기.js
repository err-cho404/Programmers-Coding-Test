function solution(nums) {
    var answer = 0;
    for(i=0;i<nums.length-2;i++){
        for(j=i+1;j<nums.length-1;j++){
            for(k=j+1;k<nums.length;k++){
                var count = 0;
                var numCheck = [nums[i],nums[j],nums[k]].reduce((a,b)=>a+b);
                for(l=1;l<=numCheck/2;l++){
                    if(numCheck%l==0){
                        count++;
                    }
                }
                if(count==1){
                    answer++;
                }
            }
        }
    }
    return answer;
}