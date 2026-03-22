package OOPS_JAVA.inheritance;

public class intro {

    class Laptop{
        String name="HP";
    }

    class Bike{
        String run = "Petrol";
    }
    public static void main(String[] args) {
        intro l = new intro();
        Laptop l1= l.new Laptop();
        Bike B = l.new Bike();
        System.out.println (l1.name);
        System.out.println (B.run);

    }
}
