package OOPS_JAVA.lambda_expression;

public class lambda_expression {

    interface A{
        void display();
    }
    public static void main(String[] args) {

        lambda_expression.A fi = ()->
        {

                System.out.println ("Displaying the output");

        };

        fi.display();

    }
}


//   ' -> ' is a lambda expression