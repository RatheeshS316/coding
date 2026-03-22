// there are two types of error are compiler time error and run time error

 package OOPS_JAVA.Exception_handling;

import java.util.InputMismatchException;
import java.util.Scanner;
public class Exception_handling_try_catch {

    public static void main(String[] args) {
     Scanner scan = new Scanner(System.in);
     try {
         int number = scan.nextInt ();
     }
     catch(Exception e){
         System.out.println (e);
        }
        System.out.println ("program is ended");

     // output :
//        23d
//        java.util.InputMismatchException
//        program is ended

        try{
            int a=12/0;
        }
        catch(Exception e){
            System.out.println (e);         //java.lang.ArithmeticException: / by zero
        }

        try{
            int no = scan.nextInt();
            int a=12/0;
        }
        catch(InputMismatchException e){
            System.out.println (e);
        }
//        23
//        Exception in thread "main" java.lang.ArithmeticException: / by zero



        try{
            int num = scan.nextInt();
            int b= 10/0;
        }
        catch(InputMismatchException e){
            System.out.println (e);
        }
        catch(ArithmeticException e){
            System.out.println ("Arithmetic expression " + e );
        }

//        23
//        Arithmetic expression java.lang.ArithmeticException: / by zero

        // enna solla varanga na b=infinity 1st catch condition ku mismatch aaiduchi adunala next condition ArithmeticException la excute aagudhu
    }
}
