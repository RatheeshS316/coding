package The_Conquest.Iterative_statement4;

public class While_loop {
    public static void main(String[] args) {

              // while-loop
        int n= 5;
        int sum = 0;
        int i=0;

        while(i<=n){
            sum += i;
            i++;
        }
        System.out.println("Sum of two numbers is:"+sum);             // output is 15


//-------------------------------------------------------------------------------------------------------------
        //Factorial in while loop
        int n1=5;
        int fact=1;
        int j=1;
        while(j<=n1)
        {
            fact = fact*j;
            j++;//<--------------------------it is important
        }
        System.out.println("factorial of number is :"+fact);

    }
}

   // idhu entry-control-loop


