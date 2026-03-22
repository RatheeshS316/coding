package DataStructures_and_Algorithms.Phase1.sampleprogram;

public class fibonaci1 {
    public static void main(String[] args) {
        int a = 0;
        int b=1;
        System.out.println (a);
        System.out.println (b);

        for(int i =0 ; i<5; i++){
            int value = a + b;
            System.out.println (value);
            a = b;
            b= value;
        }
    }
}

// The Output :
//        0
//        1
//        1
//        2
//        3
//        5
//        8
