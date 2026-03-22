package Exercise;

public class exercise8 {

    interface readable{
       void read();
    }
    interface writable{
        void write();
    }
    interface storable{
        void store();
    }
    class file implements readable,writable,storable{
       public void read(){
            System.out.println ("it is reading");
        }
        public void write(){
            System.out.println ("it is writing");
        }
        public void store(){
            System.out.println ("it is storing");
        }
    }
    public static void main(String[] args) {
        exercise8 ex8 = new exercise8 ();
        file f1 = ex8.new file ();
        f1.read();
        f1.write();
        f1.store();
    }
}
