package day_21_30.Arrays.Recursion;

public class recursion {
    public static int sum(){
        System.out.println ("hey");
        sum ();
        return 0;
    }
    public static void main(String[] args) {
     sum();
    }
}
