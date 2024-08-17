class Solution {
    public int solution(int n) {
        int answer = 0;
        if(0 < n && n <= 1000){
            int x=0;
            int result=n-(n%2);
            for(int i=1;i<(n/2);i++){
                x=2*i;
                result=result+x;
                System.out.println(result);
            }
            return answer=result;
        }
        return answer;
    }
}