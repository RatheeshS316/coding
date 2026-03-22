package OOPS_JAVA.Exception_handling;

public class Exception_handling_try_catch_finally {
    public static void main(String[] args) {
        try{
            int a=10;
            System.out.println (a);
        }
        catch(Exception e){
            System.out.println (e);
        }
        finally{
            System.out.println ("Conform executed");
        }
//        10
//        Conform executed


        try{
            int b=10/0;
            System.out.println (b);
        }
        catch(Exception e){
            System.out.println (e);
        }
        finally{
            System.out.println ("conform executed");
        }

//        java.lang.ArithmeticException: / by zero
//        conform executed



        try{
            int b=10/0;

            System.out.println (b);
        }
        catch(Exception e){
            System.out.println (e);
        }
        finally{
            System.out.println ("conform executed");
        }
    }
}
