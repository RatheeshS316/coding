package OOPS_JAVA.Exception_handling;
import java.util.Scanner;
public class Exception_handling_try_catch_finally_throw {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        try{
            int a=10;
            throw new Exception();
        }
        catch(Exception e){
            System.out.println (e);
        }
        System.out.println ("program Ended");

        //java.lang.Exception
        //program Ended




        try{
            int a=10;
            throw new Exception(":this is a artifial error");
        }
        catch(Exception e){
            System.out.println (e);
        }
        System.out.println ("program Ended");

        //java.lang.Exception: :this is a artifial error
        //program Ended



        //car speed

        try{

            int speed = scan.nextInt();
            if(speed<1){
                throw new ArithmeticException ("speed should be greater than zero");
            }
        }
        catch(ArithmeticException e){
            System.out.println (e);
        }
        finally{
            System.out.println ("finally code is executed");
        }


//        -1
//        java.lang.ArithmeticException: speed should be greater than zero
//        finally code is executed

//        1
//        finally code is executed

    }
}
