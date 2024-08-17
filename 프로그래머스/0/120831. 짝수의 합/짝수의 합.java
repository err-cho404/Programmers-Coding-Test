class Solution {
    public int solution(int n) {
        int answer = 0;
        if(0 < n && n <= 1000){
            n=n-(n%2);
            int result=n;
            for(int i=2;i<n;i+=2){
                result=result+i;
            }
            return answer=result; 
        }
        return answer;
    }
}