package day_6_10;

public class factorialusingforwhileloop {
    public static void main(String[] args) {
        int sum =0 , n=5 , fact =1 ,i = 1 ;

     // sum the number using for-loop
        for( i =0 ; i<=n ;i++){
            sum = sum + i;
        }
        System.out.println (sum);

     // factorial the number using for-loop
        for( i =1 ; i<=n ;i++){
            fact = fact*i;
        }
        System.out.println (fact);

    // factorial the number using while-loop
        while(n!=0){
            fact= fact*n;
            n--;
        }
        System.out.println (fact);

    // sum the number using while loop
    while(n!=0){
        sum = sum + n;
        n--;
    }
        System.out.println (sum);
    }
}
