package OOPS_JAVA.access_modifier;

public class privateclass {


    class privatec {
        private int rollno = 122;

        void attendance () {
            System.out.println ( rollno );
        }
    }
//
//    class private1 extends privatec{
//
//    }
    public static void main(String[] args) {

        privateclass pc = new privateclass ();
        privatec p = pc.new privatec ();
    //  System.out.println (p.name);   it throws a error
        p.attendance ();       // 122

        // private aah irundhalum namba function vachi value print panikalam

//        private1 p1 = pc.new private1 ();
      //  System.out.println (p1.rollno);  it throws a error
//            p1.attendance ();    //122

    }
}
