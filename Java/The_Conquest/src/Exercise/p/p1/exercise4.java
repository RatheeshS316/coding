package Exercise.p.p1;

import Exercise.p.p2.exercise44;
public class exercise4 {

    class person{
        public String name="Ratheesh";
        protected int age = 18;
        private int securityno=19329219;
    }

    class employee extends person{

    }
    public static void main(String[] args) {

        exercise4 ex4 = new exercise4 ();
        employee p = ex4.new employee();
        System.out.println (p.name);
        System.out.println (p.age);
   //     System.out.println (p.securityno);    idhu use panna mudila reason is it is a private class it is used inside a class

        exercise44 ex44 = new exercise44();
  //      System.out.println (ex44.address);   idhu la error throw aagudhu because anga public nu declare pannala

    }
}
