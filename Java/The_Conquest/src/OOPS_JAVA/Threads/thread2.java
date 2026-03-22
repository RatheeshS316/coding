package OOPS_JAVA.Threads;

class a extends  Thread{
    public void run(){
        for(int i=0 ;i<5;i++) {
            System.out.println ( "running" );
            try {
                Thread.sleep ( 20 );
            } catch (Exception e) {
                System.out.println ( e );
                try{
                Thread.sleep(20);
            }catch(Exception ee){
                   e.printStackTrace ();
                }
            }

        }
    }
}
class b extends  Thread{
    public void run(){
        for(int i=0;i<5;i++){
            System.out.println ("Run");
            try{
                Thread.sleep(11);
            }catch(Exception e ) {
                System.out.println ( e );
                try {
                    Thread.sleep ( 100 );
                }
                catch(Exception ee){
                    e.printStackTrace ();
                }
            }
        }
    }
}
public class thread2 {
    public static void main(String[] args) {
        a a1 = new a ();
        b b1 = new b ();
        a1.start();
        b1.start();
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
    }
}
