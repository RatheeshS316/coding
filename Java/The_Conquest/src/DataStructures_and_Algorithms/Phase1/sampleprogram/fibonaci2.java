package DataStructures_and_Algorithms.Phase1.sampleprogram;

public class fibonaci2 {
    static int count = 2;

    public static void fibonacci(int a , int b){
        if(count <= 5){
            int value = a + b;
            System.out.println (value);
            a = b ;
            b= value;
            count++;
            fibonacci(a,b);
        }
        else{
            return;
        }
    }
    public static void main(String[] args) {
        System.out.println (0);
        System.out.println (1);
        fibonacci(0,1);
    }
}