package day1;
import java.util.Scanner;


public class input {
    public static void main(String[] args) {
 //Input allows the user to enter data while the program is running.

        Scanner sc = new Scanner (System.in);
        System.out.print ("Enter your name:");
        String name = sc.nextLine();
        System.out.print ("Enter your age:");
        int age = sc.nextInt();
        System.out.println ("My name is" + " " +  name +  " " + "and my age is " + age );
    }
}
