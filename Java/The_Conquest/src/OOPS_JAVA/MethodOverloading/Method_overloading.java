package OOPS_JAVA.MethodOverloading;

public class Method_overloading {

    int marks(int sheet){
        System.out.println ("sheet is printed");
        return sheet;
    }
    int marks(){
        System.out.println ("mark is printed");
        return 0;
    }
    int marks(int a , int b ){
        System.out.println ("Three values");
        return a+b;
    }
    int marks(int a , int b ,int c){
        System.out.println ("Three values");
        return a+b+c;
    }


    public static void main(String[] args) {

        Method_overloading s1 = new Method_overloading ();
        s1.marks();
        s1.marks(12);
        s1.marks(12 , 132);
        s1.marks(12 , 132, 23);

    }
}
