package Exercise;

public class exercise7 {

    interface playable1{
        abstract void playable();
    }

    class guitar implements playable1{
        public void playable(){
            System.out.println ("guitar");
        }
    }

    class piano implements playable1{
        public void playable (){
            System.out.println ("piano");
        }
    }
    public static void main(String[] args) {

       exercise7 ex7 = new exercise7();

       guitar g1 = ex7.new guitar ();
       piano p1 = ex7.new piano();

       g1.playable ();
       p1.playable ();

// the output is
//        guitar
//        piano
    }
}
