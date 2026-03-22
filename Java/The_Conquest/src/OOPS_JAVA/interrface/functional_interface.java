package OOPS_JAVA.interrface;

public class functional_interface {
    
    interface A{
        void display();
    }
    public static void main(String[] args) {
        
        functional_interface.A fi = new functional_interface.A (){
            public void display(){
                System.out.println ("Displaying the output");
            }
        };
        
        fi.display();
        
    }
}
