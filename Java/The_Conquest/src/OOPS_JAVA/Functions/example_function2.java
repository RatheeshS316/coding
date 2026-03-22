package OOPS_JAVA.Functions;

public class example_function2 {
    int a=10,b=20;

    void sum(){
        System.out.println (a+b);
    }

    int apple_price = 20, apple_count=5;

    void total_money(){
        System.out.println (apple_price*apple_count);
    }
    public static void main(String[] args) {

        example_function2 add = new example_function2 ();
        add.sum();                                                 // 30

        example_function2 money = new example_function2 ();
        money.total_money ();                                       // 100
    }
}
