package OOPS_JAVA.Constructors;

public class parameterized_constructors {

    int marks;
    String name;

    parameterized_constructors(int a){
        System.out.println (a);
    }

    parameterized_constructors(){
        System.out.println ("b");
    }

    parameterized_constructors(int marks,String name){
        System.out.println ("print the mark " +marks+ " and the name is "+name);
    }

    parameterized_constructors(String S , int N){
       name = S;
       marks = N;
    }

    public static void main(String[] args) {

        parameterized_constructors pc = new parameterized_constructors (10);                                //10
        parameterized_constructors pc2 = new parameterized_constructors ();                                    //b
        parameterized_constructors pc3 = new parameterized_constructors (89,"Ratheesh");           //print the mark 89 and the name is Ratheesh
        parameterized_constructors pc4 = new parameterized_constructors ("ratheesh",23);
        // idha namba already method overloading la pathukurom
    }
}
