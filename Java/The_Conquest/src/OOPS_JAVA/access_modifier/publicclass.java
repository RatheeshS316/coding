package OOPS_JAVA.access_modifier;

public class publicclass {

    class student1{
       public String name = "Ratheesh";
    }
    public static void main(String[] args) {
        publicclass pc = new publicclass ();
        student1 s1 = pc.new student1 ();
        System.out.println (s1.name);
    }
}
