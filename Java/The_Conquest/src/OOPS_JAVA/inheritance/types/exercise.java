package OOPS_JAVA.inheritance.types;

public class exercise {

    class animalkingdom{
        void behaviour(){
            System.out.println ("walking");
            System.out.println ("eating");
            System.out.println ("Sleeping");
        }
    }

    class dog extends animalkingdom{
        void behavior1(){
            System.out.println ("barking");
        }
    }

    class lion extends animalkingdom{
        void behavior1(){
            System.out.println ("roaring");
        }
    }
    public static void main(String[] args) {

        exercise ex = new exercise ();
        animalkingdom Ak = ex.new animalkingdom ();
        dog D = ex.new dog();
        lion L = ex.new lion();

       Ak.behaviour ();
        System.out.println ();
       D.behaviour ();
       D.behavior1 ();
        System.out.println ();
       L.behaviour ();
       L.behavior1 ();

    }
}
