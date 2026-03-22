package OOPS_JAVA.inheritance.types;

    // it is a mixture of both multilevel and hierarchical inheritance.
    // hierarchical inheritance : granddad->dad->son
    //multilevel inherintance : dad-->son1,son2,son3


public class hybrid_inheritance {
    class granddad {
        String language = "tamil";
    }

    class dad extends granddad{

    }
    class son1 extends dad{

    }
    class son2 extends dad{

    }
    class son3 extends dad{

    }

    public static void main(String[] args) {


        hybrid_inheritance HI = new hybrid_inheritance ();
        granddad gd = HI.new granddad ();
        dad d = HI.new dad();
        son1 s1 = HI.new son1();
        son2 s2 = HI.new son2();
        son3 s3 = HI.new son3();


        System.out.println (gd.language);
        System.out.println (d.language);
        System.out.println (s1.language);
        System.out.println (s2.language);
        System.out.println (s3.language);



    }
}
