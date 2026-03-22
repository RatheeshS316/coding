package OOPS_JAVA.Functions;

public class FunctionWithParameters {

    void fees(int money){
        System.out.println ("Fees has paid");
        System.out.println (money);
    }

    void sum(int a,int b){
        System.out.println (a+b);
        System.out.println (a-b);
        System.out.println (a*b);
        System.out.println (a/b);

    }
    public static void main(String[] args) {


        FunctionWithParameters money = new FunctionWithParameters ();
        money.fees(122000);
        /*
            The output :
                        Fees has paid
                        122000
             */

        FunctionWithParameters add = new FunctionWithParameters ();
        add.sum(10,29);
        // 39
        // -19
        //290
        //0
    }
}

