package OOPS_JAVA.keyword.S.super_keyword;

// super keyword na enna parent class call panradhuku use panradhu super keyword.

public class super_keyword {

    class father{
        String  gender = "m";
        void print(){
            System.out.println ("parent class");
            System.out.println (gender);
        }
    }

    class daughter extends father{
        String gender = "f";
        void print(){
            System.out.println ("child class");
            System.out.println (super.gender);
            System.out.println ();
            super.print();
        }
    }
    public static void main(String[] args) {
        super_keyword sk = new super_keyword ();
        father f = sk.new father();
        daughter d = sk.new daughter ();
        f.print();
        System.out.println ();
        d.print ();
    }
}
