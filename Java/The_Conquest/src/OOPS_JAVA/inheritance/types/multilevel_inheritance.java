

//  multilevel inheritance  granddad-->dad--->son

package OOPS_JAVA.inheritance.types;

public class multilevel_inheritance {

    class granddad{
        boolean homeisthere = true;
    }

    class dad extends granddad{

    }

    class son extends dad {
        boolean homeisthere = false;
    }
    public static void main(String[] args) {

        multilevel_inheritance MI = new multilevel_inheritance ();
        granddad gd = MI.new granddad ();
        dad d = MI.new dad ();
        son s = MI.new son();
        System.out.println (gd.homeisthere);
        System.out.println (d.homeisthere);
        System.out.println (s.homeisthere);


// The output:
//        true
//        true
//        false

    }
}
