package OOPS_JAVA.inheritance.types;

public class multiple_inheritance {

    interface printable{
        abstract void display();
    }

    interface showable{
        abstract void display();
    }

    class Document implements printable,showable{
        public void display(){
            System.out.println ("it is display");
        }
    }

    public static void main(String[] args) {
        multiple_inheritance mi = new multiple_inheritance ();
        Document D = mi.new Document ();
        D.display();
    }
}
