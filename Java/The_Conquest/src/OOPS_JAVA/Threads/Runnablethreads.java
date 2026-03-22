package OOPS_JAVA.Threads;

class C implements  Runnable{
    public void run(){
        System.out.println ("run");
    }
}
public class Runnablethreads {
    public static void main(String[] args) {
//       C c= new C();     //do this or that
//        //or
        Runnable ruu = new C ();   // its is a good pratice

      //  c.start();  poda koodadhunu nenaikira

        Thread t = new Thread (ruu);    // run
    //    Thread t = new Thread (c);   // run

        t.start();
    }
}
