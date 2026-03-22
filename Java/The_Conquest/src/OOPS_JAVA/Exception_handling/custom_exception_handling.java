package OOPS_JAVA.Exception_handling;

import java.util.Scanner;

class NotToGoException extends Exception{
    public  NotToGoException(String s){
        super(s);
    }
}


public class custom_exception_handling {
    public static void main(String[] args) {
        Scanner scan = new Scanner ( System.in );

        try{
            int licenseage = scan.nextInt();
            if(licenseage<18){
                throw new NotToGoException("before 18 you must not ride cars");
            }
        }
        catch(Exception e){
            System.out.println (e);
        }
        finally{
            System.out.println ("finally");
        }
//                12
//                OOPS_JAVA.Exception_handling.NotToGoException: before 18 you must not ride cars
//                finally

//            44
//            finally

    }

    }
