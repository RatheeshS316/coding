package Exercise;

class DivisionExample{
    void divideNumbers(int num , int den){
        try{
            int result = num/den;
        }
        catch(ArithmeticException e){
            System.out.println (e + ":cannot divided by zero");
        }
    }
}
public class Exercise10 {
    public static void main(String[] args) {
        DivisionExample de = new DivisionExample ();
        de.divideNumbers ( 23,0 );
        //java.lang.ArithmeticException: / by zero:cannot divided by zero
    }
}
