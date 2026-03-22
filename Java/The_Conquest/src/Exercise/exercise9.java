package Exercise;
import java.util.InputMismatchException;
import java.util.Scanner;
public class exercise9 {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        int a = scan.nextInt();
        int b = scan.nextInt();



        try{
            int e=a/b;
        }
        catch(ArithmeticException e){
            System.out.println (e);
        }
//        12
//        0
//        java.lang.ArithmeticException: / by zero

        try{
            int c = scan.nextInt();
            int d = scan.nextInt();
        }
        catch(InputMismatchException e){
            System.out.println (e);
        }
        //gd
        //java.util.InputMismatchException
    }
}
