package DataStructures_and_Algorithms.Phase1.sampleprogram;

public class fibonaci3 {
    public static void main(String[] args) {
        int[] myarray = {32,11,43,1,23};
        int minval = myarray[0];

        for(int i : myarray){
            if(minval > i){
                minval = i;
            }
        }
        System.out.println ("Lowest value:" +minval);
    }
}
