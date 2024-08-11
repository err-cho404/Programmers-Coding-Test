import java.util.Arrays;
class Solution {
    public int solution(int[] array) {
        int answer = 0;
        if(0 < array.length &&  array.length<100 && array.length%2==1){
            for(int i=0;i<array.length;i++){
                if(-1000<array[i] && array[i]<1000){
                    Arrays.sort(array);
                    answer=array[Math.round(array.length/2)];
                }
            }
        }
        return answer;
    }
}