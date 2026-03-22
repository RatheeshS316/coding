package OOPS_JAVA.Threads;

class A extends  Thread{
    public void run(){
        for(int i=0 ;i<5;i++) {
            System.out.println ( "running" );
            try {
                Thread.sleep ( 20 );
            } catch (Exception e) {
                System.out.println ( e );
            }
        }
    }
}
class B extends  Thread{
public void run(){
    for(int i=0;i<5;i++){
    System.out.println ("Run");
    try{
    Thread.sleep(11);
}catch(Exception e ){
        System.out.println (e);
    }
}
}
}
public class thread {
    public static void main(String[] args) {
        A a1 = new A ();
        B b1 = new B ();
        a1.start();
        b1.start();
    }
}


//Run
//running
//Run
//running
//Run
//Run
//running
//Run
//running
//running