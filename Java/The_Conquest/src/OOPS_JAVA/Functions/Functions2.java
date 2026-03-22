package OOPS_JAVA.Functions;

public class Functions2 {
   static void  call(){
        System.out.println (" I'm Calling ");
     //   walk();         it throws a error
    }

    void walk(){
        System.out.println ("I Walking");
    }
    public static void main(String[] args) {

        Functions2 call1 = new Functions2 ();
        call1.call ();
        call1.walk();

        call();
    }
}


// Static la irundhu non static call mudiyadhu
// example static void call() vachi void walk() call panna mudiyadhu
// static to static na theva illa object vachi call panna vendam nu example is static void call() ku static void main() object theva illa