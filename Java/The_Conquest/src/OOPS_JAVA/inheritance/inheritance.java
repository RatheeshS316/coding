package OOPS_JAVA.inheritance;

public class inheritance {

    class appa{
        boolean gene = true;
    }

    class son extends appa{

    }
    public static void main(String[] args) {

        inheritance inh = new inheritance ();
        son s = inh.new son();
        System.out.println (s.gene);
     }
}
