package OOPS_JAVA.Constructors;

public class student {
    int marks;
    String name;

    student(){
        System.out.println ("this is a constructor");
    }
    public static void main(String[] args) {
        student obj = new student ();           //this is a constructor
        //student() is a constructor is the same name as class name

        student obj2 = new student ();          //this is a constructor
    }
}

/*
explanation
code 11 and 14 la ulla constructors( student() )  call panradhu nala print aaiduchi
 */