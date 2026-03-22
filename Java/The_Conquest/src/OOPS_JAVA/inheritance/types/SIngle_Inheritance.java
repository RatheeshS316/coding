package OOPS_JAVA.inheritance.types;


public class SIngle_Inheritance {
    public static class Single_inheritance {

        class dad{
            int age = 55;
            void play(){
                System.out.println ("nicely PLay");
            }
        }
        class son extends dad {
            int age = 18;  //Override
        }
        public static void main(String[] args) {

            Single_inheritance SI = new Single_inheritance ();
            dad d=  SI.new dad();
            d.play ();                                     // nicely PLay

            son s = SI.new son();
//            s.play();                                    // nicely PLay
//            System.out.println (s.age);                 // 18
        }
    }
}
