package OOPS_JAVA.Exception_handling;


public class Exception_handling_trycatchthrows {

    class div{
        void func() throws Exception{
            int division = 10/0;
        }
    }
    public static void main(String[] args) {

        Exception_handling_trycatchthrows ex1 = new Exception_handling_trycatchthrows ();
        try {
            div di = ex1.new div ();
            di.func();
        }
        catch(Exception e){
            System.out.println (e);
        }
    }
}


// java.lang.ArithmeticException: / by zero