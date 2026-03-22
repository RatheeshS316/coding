package OOPS_JAVA.Threads;

//class A1 extends  Thread{
//    int j=0;
//    public void run(){
//        for(int i=0;i<=5;i++) {
//            j = 50;
//        }
//    }
//}
//public class JoinMethodsInthreads {
//    public static void main(String[] args) {
//        A1 a1=new A1 ();
//        a1.start ();
//        System.out.println (a1.j);   //0   //why 50 varalana anga main method call pannitu wait panna matikidu adunala 0 value nu show aagudu

class A1 extends  Thread{
    int j=0;
    public void run(){
        for(int i=0;i<=5;i++) {
            j = 50;
        }
    }
}
public class JoinMethodsInthreads {
    public static void main(String[] args) {
        A1 a1=new A1 ();
        a1.start ();
        try{
        a1.join();
        }
        catch(Exception e ){
            e.printStackTrace ();
        }
        System.out.println (a1.j);
    }               //50
    }

