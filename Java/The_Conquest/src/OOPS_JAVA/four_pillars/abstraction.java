package OOPS_JAVA.four_pillars;

public class abstraction {


    abstract class animal {

        abstract void eat();    // ipa inga abstract potana conform nee next function la override panni aaganum adhae mari function la abstract potha class laiyum podanum

        void sleep() {
            System.out.println ( "sleeping" );
        }
    }

   class birds extends animal{

        void eat(){     // override
            System.out.println ("eating");
        }
   }

    public static void main(String[] args) {
        abstraction aa = new abstraction ();
        animal a = aa.new birds ();
        a.eat ();

    }
}
