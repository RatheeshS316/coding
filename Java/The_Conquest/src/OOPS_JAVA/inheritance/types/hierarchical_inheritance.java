

//    hierarchical inheritance   one parent -> many childrens


package OOPS_JAVA.inheritance.types;
public class hierarchical_inheritance {

    class mom{
        boolean samehabit = true;
    }
    class son extends mom{

    }
    class daughter extends mom{

    }

    public static void main(String[] args) {

        hierarchical_inheritance HI = new hierarchical_inheritance ();
        mom m = HI.new mom();
        son s = HI.new son();
        daughter d = HI.new daughter ();

        System.out.println (m.samehabit);
        System.out.println (s.samehabit);
        System.out.println (d.samehabit);

//  the output
//        true
//        true
//        true
    }
}
