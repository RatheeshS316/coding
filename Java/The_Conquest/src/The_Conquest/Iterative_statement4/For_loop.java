package The_Conquest.Iterative_statement4;

public class For_loop {
    public static void main(String[] args) {

        /*  for-loop
                            syntax:
                             for(initialization;condition;increment){
                             statements
                             }
                    */
        for(int i=0;i<10;i++){
            System.out.println("ratheesh");
        }
        // output :
        //ratheesh
        //ratheesh
        //ratheesh
        //ratheesh
        //ratheesh
        //ratheesh
        //ratheesh
        //ratheesh
        //ratheesh
        //ratheesh


        // sum of n numbers
        int n = 5;
        int sum= 0;
        for(int i = 0;i<=n ;i++){
            sum = sum+ i;     // or sum =+ i
        }
        System.out.println("Sum Of n numbers:"+sum);    //Sum Of n numbers:15



        // factorial of n numbers
        int n1 = 5;
        int fact=1;
        for(int i = 1;i<=n ;i++){
            fact = fact*i;
        }
        System.out.println("Factorial of Fact is:"+fact);     //Factorial of Fact is:120


    }
}
