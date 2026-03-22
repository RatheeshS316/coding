package OOPS_JAVA.interrface;

public class interfacee {

    interface dad{
        boolean gene=true;
        abstract void skills();
    }

    class child implements dad{

       public void skills(){
            System.out.println ("he played cricket");
        }
    }
    public static void main(String[] args) {

        interfacee inte = new interfacee ();

        child ch1 = inte.new child ();
        System.out.println (ch1.gene);
        ch1.skills();


    }
}
