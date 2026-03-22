package day2;
import java.util.Scanner;
public class if_else {
    public static void main(String[] args) {
        Scanner num = new Scanner(System.in);
        int a = num.nextInt ();
        int b = num.nextInt();

        if(a > b){
            System.out.println (" a is bigger");
        }
        else if(a < b ){
            System.out.println (" b is bigger ");
        }
        else{
            System.out.println (" both are same");
        }
    }
}
