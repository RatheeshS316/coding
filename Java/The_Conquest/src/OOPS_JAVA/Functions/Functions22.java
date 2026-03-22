package OOPS_JAVA.Functions;

public class Functions22 {
    static void  call(){
        System.out.println (" I'm Calling ");
          walk();
    }

    static void walk(){
        System.out.println ("I Walking");
    }
    public static void main(String[] args) {

        Functions22 call1 = new Functions22 ();
        call1.call ();

        call();
    }
}

// static la irundhu static call pannalam
// example static void call() la irundhu static void walk() call pannalam
// idhuku object vachi class la ulladhu pannalam nu avasiyam illa
