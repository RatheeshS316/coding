package day_11_15;

public class method_overriding {
    public static void main(String[] args) {
        class dad{
            void genes(){
                System.out.println ("genes is confirmed");
            }
        }
        class son extends dad{
            void genes(){
                System.out.println ("son genes is confirmed");
            }
        }
        dad d = new dad();
        d.genes();
        son s = new son();
        s.genes();
    }
}
