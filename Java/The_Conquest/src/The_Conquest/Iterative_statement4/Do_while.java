package The_Conquest.Iterative_statement4;

public class Do_while {
    public static void main(String[] args) {

        // do-while-loop
//        int n = 5;
//        int sum = 0;
//        int i = 0;
//      do {
//          sum += i;
//          i++;
//      }
//        while(i<=n);
//        System.out.println("Sum of  numbers is:"+sum);             // output is 15

        // do-while-loop  wrong aah panitom na
        int n = 5;
        int sum = 0;
        int i = 0;
        do {
            sum += i;
            i++;                      // idhu execute aanadhuku aprm tha condition check pannum
        }
        while(i<=n);
        System.out.println("Sum of  numbers is:"+sum);             // output is 21
 //------------------------------------------------------------------------------------------------------------------

            //factorial
        int fact=1;
        int j=1;

        do{
            fact = fact*j;
            j++;
        }
        while(j<=n);
        System.out.println("factorial of fact is :"+fact);

        //----------------------------------------------------------------------------------------------------------
        //Factorial values thappa pothal enna aagum nu papom
        int fact1=6;
        int k=1;

        do{
            fact1 = fact1*j;
            k++;
        }
        while(k<=n);
        System.out.println("factorial of fact is :"+fact1);               // 720
    }
}



                        // idhu exit-Control-loop