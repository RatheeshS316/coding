package OOPS_JAVA.interrface;

public class interfaceee {

    interface dad{
        int marks=23;
     abstract  void func();
    }
    interface mom {
        int age= 23;

        abstract void display();
    }
    class son implements  dad,mom{
        public void func(){
            System.out.println ("printed");}

    public void display(){
        System.out.println ("printed2");
    }
    }

    public static void main(String[] args) {

        interfaceee inte = new interfaceee ();
        son s = inte.new son();
        System.out.println (s.marks);
        System.out.println (s.age);
        s.func();
        s.display ();
    }
}
