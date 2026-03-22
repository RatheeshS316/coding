package day_6_10;

public class prime_numbers {
    public static void main(String[] args) {
        int prime_number = 27;
        for (int i=1;i<=prime_number ; i++){
        if(prime_number % i == 0){
            System.out.println (prime_number + " " + "it is not a prime number");
        }
        else{
            System.out.println (prime_number + " " +"It is a prime number");
        }
        }
    }
}
