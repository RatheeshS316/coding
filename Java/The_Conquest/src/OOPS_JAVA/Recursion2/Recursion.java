package OOPS_JAVA.Recursion2;

public class Recursion {
    public static void main(String[] args) {
        natPrint ( 12 );
    }

    public static void natPrint(int n) {
        // print 10 to 1 in descending order .

        //Base Case
        if (n == 1) {
            System.out.println ( 1 );
        }

        //Recursive Case
        else {
            System.out.println ( n );
            natPrint ( n - 1 );
        }
    }
}
        /*  The Output Is
                            12
                            11
                            10
                            9
                            8
                            7
                            6
                            5
                            4
                            3
                            2
                            1

                             */


