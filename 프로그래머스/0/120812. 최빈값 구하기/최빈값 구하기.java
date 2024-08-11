import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.Collections;

class Solution {
    public int solution(int[] array) {
        int answer = 0;
        List<Integer> intList = new ArrayList<>();
        for(int data=0; data<array.length; data++){
            if(0<array.length && array.length<100 ){
                if(0<=array[data] && array[data]<1000){
                    
                    for (Integer x : array) {
                        intList.add(x);
                    }

                    Set<Integer> set = new HashSet<Integer>(intList);
                    List<Integer> newList =new ArrayList<Integer>(set);

                    List<Integer> countList= new ArrayList<>();
                    
                    for(int i=0;i<newList.size();i++){
                        int listFrequency = Collections.frequency(intList, newList.get(i));
                        countList.add(listFrequency);
                    }

                    int maxValue = Collections.max(countList);
                    
                    if(Collections.frequency(countList,maxValue)==1){
                        int index = countList.indexOf(maxValue);
                        int maxFreVal=newList.get(index);
                        answer=maxFreVal;
                    }else{
                        answer=-1;
                    }
                    break;
                }
            }
        }
        return answer;
    }
}



