package day2;
import java.util.Scanner;

public class Operators {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();

        // arithmetic operator
        System.out.println (a+b);
        System.out.println (a-b);
        System.out.println (a*b);
        System.out.println (a/b);
        System.out.println (a%b);

        // logical operator
        System.out.println (a & b);
        System.out.println (a | b);
        System.out.println (a!=b);

        // relational operator
        System.out.println (a == b);
        System.out.println (a <= b);
        System.out.println (a >= b);
        System.out.println (a != b);
        System.out.println (a > b);
        System.out.println (a < b);
    }
}
